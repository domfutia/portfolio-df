import {notFound} from 'next/navigation';
import type {Locale} from '@/config/site.settings';
import {hasMdxFile} from '@/lib/mdx';

export default async function ResearchArticlePage({
  params
}: {
  params: Promise<{lang: string; slug: string}>;
}) {
  const {lang, slug} = await params;

  if (!hasMdxFile('research', lang as Locale, slug)) {
    notFound();
  }

  const Post = (await import(`@/content/research/${lang}/${slug}.mdx`)).default;

  return (
    <section className="section">
      <div className="container">
        <article className="mdxWrap">
          <Post />
        </article>
      </div>
    </section>
  );
}
