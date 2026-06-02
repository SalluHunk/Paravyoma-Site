import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        This page could not be found
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground text-pretty">
        The page you are looking for may have moved or no longer exists.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </Container>
  );
}
