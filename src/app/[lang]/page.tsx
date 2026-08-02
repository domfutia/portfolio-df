import Image from 'next/image';
import Link from 'next/link';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {navigation} from '@/config/navigation';

export default async function HomePage({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  setRequestLocale(lang);
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');

  const sectionLinks = navigation.filter(item => item.key !== 'home');

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
            <article className="panel"><h3>{t('featuredResearchTitle')}</h3><p>{t('featuredResearch')}</p></article>
            <article className="panel"><h3>{t('featuredWritingTitle')}</h3><p>{t('featuredWriting')}</p></article>
            <article className="panel"><h3>{t('featuredDevelopmentTitle')}</h3><p>{t('featuredDevelopment')}</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <h2>{t('sectionsTitle')}</h2>
          </div>
          <div className="sectionLinksGrid">
            {sectionLinks.map((item) => {
              const label = tNav(item.key);
              return (
                <Link key={item.key} href={`/${lang}${item.href}`} className="sectionLinkCard">
                  <span className="sectionLinkLabel">{label}</span>
                  <span className="sectionLinkArrow">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}