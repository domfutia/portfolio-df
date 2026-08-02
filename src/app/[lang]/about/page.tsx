import Image from 'next/image';
import {getTranslations, SetRequestLocale} from 'next-intl/server';
import {SectionIntro} from '@/components/ui/section-intro';

export default async function AboutPage({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  SetRequestLocale(lang);
  const t = await getTranslations('about');

  return (
    <section className="section">
      <div className="container">
        <SectionIntro title={t('title')} intro={t('intro')} />
        <div className="heroGrid">
          <div className="panel">
            <p>{t('body')}</p>
          </div>
          <div className="panel">
            <Image src="/images/profile/portrait.svg" alt="Portrait placeholder" width={800} height={1000} />
          </div>
        </div>
      </div>
    </section>
  );
}
