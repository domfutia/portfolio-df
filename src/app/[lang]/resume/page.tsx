import {getTranslations} from 'next-intl/server';
import {SectionIntro} from '@/components/ui/section-intro';

const education = [
  {
    title: 'Laurea magistrale / MA',
    text: 'Filosofia della mente, fenomenologia, enattivismo, identità narrativa.'
  },
  {
    title: 'Sviluppo front-end / Front-end development',
    text: 'Progetti con Next.js, React, localizzazione, component architecture e debugging.'
  },
  {
    title: 'Scrittura e ricerca / Writing and research',
    text: 'Saggi, articoli, editing, contenuti divulgativi e scrittura critica.'
  }
];

export default async function ResumePage() {
  const t = await getTranslations('resume');

  return (
    <section className="section">
      <div className="container">
        <SectionIntro title={t('title')} intro={t('intro')} />
        <div className="resumeGrid">
          {education.map((item) => (
            <article key={item.title} className="resumeBlock">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
