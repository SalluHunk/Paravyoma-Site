import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { AuthorBlock } from "./author-block";
import { RelatedArticles } from "./related-articles";
import { NewsletterSignup } from "./newsletter-signup";
import { ReadingProgress } from "./reading-progress";
import { TableOfContents } from "./table-of-contents";
import { buildToc } from "@/lib/insights";
import type { Article } from "@/lib/insights";

interface ArticleLayoutProps {
  article: Article;
  related: Article[];
}

export function ArticleLayout({ article, related }: ArticleLayoutProps) {
  const toc = buildToc(article.sections);

  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric" }
  );
  const updatedDate = article.updatedAt
    ? new Date(article.updatedAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <ReadingProgress />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-3 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Insights
          </Link>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border bg-card">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade"
        />
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {article.category}
            </span>

            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground text-pretty sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              {article.excerpt}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden="true" />
                {article.readingTime} min read
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4" aria-hidden="true" />
                {publishedDate}
                {updatedDate && ` · Updated ${updatedDate}`}
              </span>
              <span>{article.author.name}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Body + sidebar */}
      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex gap-16 lg:items-start">
          {/* Main */}
          <article className="min-w-0 flex-1">
            {article.sections.map((section, i) => {
              const Heading = section.level === 2 ? "h2" : "h3";
              return (
                <Reveal key={section.id} delay={i * 40}>
                  <section id={section.id} className="mb-10 scroll-mt-24">
                    <Heading
                      className={
                        section.level === 2
                          ? "font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                          : "font-display text-lg font-semibold tracking-tight text-foreground"
                      }
                    >
                      {section.heading}
                    </Heading>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                      {section.body}
                    </p>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2.5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-relaxed text-muted-foreground">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </Reveal>
              );
            })}

            <div className="mt-10 border-t border-border pt-10">
              <AuthorBlock author={article.author} />
            </div>

            <div className="mt-8 lg:hidden">
              <NewsletterSignup />
            </div>
          </article>

          {/* Sticky sidebar — desktop */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24 space-y-8">
              <TableOfContents entries={toc} />
              <NewsletterSignup />
            </div>
          </aside>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <Section id="related" surface>
          <RelatedArticles articles={related} />
        </Section>
      )}

      {/* CTA */}
      <Section id="insights-cta" bleed className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12 lg:px-16 lg:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand/20 blur-3xl"
              />
              <div className="relative mx-auto max-w-xl">
                <span className="eyebrow justify-center text-brand">
                  Want this for your organisation?
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-primary-foreground text-balance sm:text-3xl">
                  We implement what we write about.
                </h2>
                <p className="mx-auto mt-4 text-base leading-relaxed text-primary-foreground/70">
                  Book a discovery call and we&apos;ll map out how these ideas
                  apply to your specific situation.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="brand"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      <CalendarCheck className="size-4" />
                      Book a discovery call
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="w-full border border-white/15 bg-white/10 text-primary-foreground hover:bg-white/15 sm:w-auto"
                  >
                    <Link href="/insights">
                      More articles
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
