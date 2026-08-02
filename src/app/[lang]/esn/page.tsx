import {getTranslations, setRequestLocale} from 'next-intl/server';
import {SectionIntro} from '@/components/ui/section-intro';

const experiences = [
  {
    title: 'Ruolo associativo',
    text: 'Descrivi qui il tuo ruolo in ESN, le responsabilità assunte e le attività organizzative più rilevanti.'
  },
  {
    title: 'Progetti e iniziative',
    text: 'Inserisci eventi, collaborazioni internazionali, attività di accoglienza e coordinamento.'
  },
  {
    title: 'Competenze maturate',
    text: 'Leadership, comunicazione interculturale, teamwork, progettazione e gestione operativa.'
  }
];

export default async function EsnPage({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  setRequestLocale(lang);
  const t = await getTranslations('esn');

  return (
    <section className="section">
      <div className="container">
        <SectionIntro title={t('title')} intro={t('intro')} />
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timelineItem" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
