import Image from 'next/image';
import Link from 'next/link';
import {getTranslations} from 'next-intl/server';

export default async function HomePage({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  const t = await getTranslations('home');

  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">{t('eyebrow')}</span>
            <h1>{t('title')}</h1>
            <p>{t('description')}</p>
            <div className="ctaRow">
              <Link href={`/${lang}/research`} className="button">
                {t('primary')}
              </Link>
              <Link href={`/${lang}/blog`} className="buttonGhost">
                {t('secondary')}
              </Link>
            </div>
          </div>
          <div className="heroVisual panel">
            <Image src="/images/profile/portrait.svg" alt="Portrait placeholder" width={800} height={1000} priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <h2>{t('featuredTitle')}</h2>
          </div>
          <div className="cardGrid">
            <article className="panel"><h3>Research</h3><p>{t('featuredResearch')}</p></article>
            <article className="panel"><h3>Writing</h3><p>{t('featuredWriting')}</p></article>
            <article className="panel"><h3>Development</h3><p>{t('featuredDevelopment')}</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
