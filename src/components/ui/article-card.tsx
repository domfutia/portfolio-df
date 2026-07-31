import Link from 'next/link';
import type {ArticleMeta} from '@/lib/content';

export function ArticleCard({
  article,
  locale,
  basePath,
  cta,
  externalCta
}: {
  article: ArticleMeta;
  locale: string;
  basePath: 'blog' | 'research';
  cta: string;
  externalCta?: string;
}) {
  const href = article.source === 'substack' && article.externalUrl ? article.externalUrl : `/${locale}/${basePath}/${article.slug}`;
  const external = article.source === 'substack' && article.externalUrl;

  return (
    <article className="articleCard">
      <div className="articleMeta">
        <span>{article.date}</span>
        {article.readingTime ? <span>{article.readingTime}</span> : null}
      </div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      {article.tags?.length ? (
        <div className="tagRow">
          {article.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <Link href={href} className="textLink" target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {external ? externalCta ?? cta : cta}
      </Link>
    </article>
  );
}
