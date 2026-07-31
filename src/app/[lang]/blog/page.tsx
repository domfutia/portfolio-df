import {getTranslations} from 'next-intl/server';
import {SectionIntro} from '@/components/ui/section-intro';
import {ArticleCard} from '@/components/ui/article-card';
import {getCollection} from '@/lib/content';
import type {Locale} from '@/config/site.settings';

export default async function BlogPage({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  const t = await getTranslations('blog');
  const articles = getCollection('blog', lang as Locale);

  return (
    <section className="section">
      <div className="container">
        <SectionIntro title={t('title')} intro={t('intro')} />
        <div className="articleGrid">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              locale={lang}
              basePath="blog"
              cta={t('read')}
              externalCta={t('external')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
