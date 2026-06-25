import { cp, mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const projectRoot = process.cwd();

/**
 * The staging-copy workaround below exists only for a local Windows bug:
 * `next build` run in place throws
 * `EISDIR: illegal operation on a directory, readlink '...node_modules\styled-jsx\index.js'`.
 * Copying the project (with symlinks dereferenced) into a temp dir sidesteps it.
 *
 * On Vercel, that same copy breaks the build instead: the project root
 * (/vercel/path0) and os.tmpdir() (/tmp) sit in different absolute trees,
 * which crashes Turbopack with
 * `FileSystemPath("").join("../../tmp/...") leaves the filesystem root`.
 * Vercel's own container has no symlink bug to work around, so build in
 * place there.
 */
if (process.env.VERCEL) {
  await runInPlaceBuild();
  process.exit(0);
}

function runInPlaceBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      [
        path.join(projectRoot, "node_modules", "next", "dist", "bin", "next"),
        "build",
        "--turbopack",
      ],
      {
        cwd: projectRoot,
        stdio: "inherit",
        env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      }
    );

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`next build exited with code ${code ?? "unknown"}`));
    });
  });
}
const stagingRoot = path.join(tmpdir(), "paravyoma-site-production-build");
const excludedTopLevel = new Set([
  ".git",
  ".next",
  "out",
  "build",
  "coverage",
  ".vercel",
]);

function shouldCopy(src) {
  const relative = path.relative(projectRoot, src);
  if (!relative) return true;
  const [topLevel] = relative.split(path.sep);
  return !excludedTopLevel.has(topLevel);
}

function runNextBuild() {
  const nextBin = path.join(stagingRoot, "node_modules", "next", "dist", "bin", "next");

  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [nextBin, "build", "--turbopack"], {
      cwd: stagingRoot,
      stdio: "inherit",
      env: {
        ...process.env,
        NEXT_TELEMETRY_DISABLED: "1",
      },
      windowsHide: true,
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`next build exited with code ${code ?? "unknown"}`));
    });
  });
}

console.log(`Preparing production build workspace: ${stagingRoot}`);
await rm(stagingRoot, { recursive: true, force: true });
await mkdir(stagingRoot, { recursive: true });
await cp(projectRoot, stagingRoot, {
  recursive: true,
  dereference: true,
  filter: shouldCopy,
});

console.log("Running Next.js production build from sanitized workspace...");
await runNextBuild();
console.log("Production build completed.");
