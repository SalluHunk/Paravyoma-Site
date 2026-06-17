import { cp, mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const projectRoot = process.cwd();
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
