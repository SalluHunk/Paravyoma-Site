import { User } from "lucide-react";
import type { ArticleAuthor } from "@/lib/insights";

interface AuthorBlockProps {
  author: ArticleAuthor;
}

export function AuthorBlock({ author }: AuthorBlockProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
        {author.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={author.avatarUrl}
            alt={author.name}
            className="size-12 rounded-full object-cover"
          />
        ) : (
          <User className="size-5" aria-hidden="true" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-semibold tracking-tight text-foreground">
          {author.name}
        </p>
        <p className="text-xs text-muted-foreground">{author.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
          {author.bio}
        </p>
      </div>
    </div>
  );
}
