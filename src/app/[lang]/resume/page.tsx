import {getTranslations, setRequestLocale} from 'next-intl/server';
import {SectionIntro} from '@/components/ui/section-intro';

export default async function ResumePage({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  setRequestLocale(lang);
  const t = await getTranslations('resume');

  const experience = (t.raw('experience') as Array<{role: string; org: string; period: string; description: string}>);
  const education = (t.raw('education') as Array<{degree: string; org: string; period: string; description: string}>);
  const projects = (t.raw('projects') as Array<{role: string; org: string; period: string; description: string}>);
  const skills = t.raw('skills') as {soft: string; languages: string; digital: string};

  return (
    <section className="section">
      <div className="container">
        <SectionIntro title={t('title')} intro={t('intro')} />

        {/* Work Experience */}
        <h2 style={{fontSize:'1.2rem', fontWeight:700, letterSpacing:'-0.02em', marginBottom:'0.75rem'}}>
          {t('experienceTitle')}
        </h2>
        <div className="timeline" style={{marginBottom:'2.5rem'}}>
          {experience.map((item) => (
            <article key={item.role + item.org} className="timelineItem">
              <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'0.25rem', marginBottom:'0.4rem'}}>
                <h3 style={{margin:0}}>{item.role}</h3>
                <span style={{color:'var(--muted)', fontSize:'0.82rem'}}>{item.period}</span>
              </div>
              <div style={{color:'var(--accent)', fontSize:'0.85rem', fontWeight:600, marginBottom:'0.5rem'}}>{item.org}</div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        {/* Education */}
        <h2 style={{fontSize:'1.2rem', fontWeight:700, letterSpacing:'-0.02em', marginBottom:'0.75rem'}}>
          {t('educationTitle')}
        </h2>
        <div className="timeline" style={{marginBottom:'2.5rem'}}>
          {education.map((item) => (
            <article key={item.degree + item.org} className="timelineItem">
              <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'0.25rem', marginBottom:'0.4rem'}}>
                <h3 style={{margin:0}}>{item.degree}</h3>
                <span style={{color:'var(--muted)', fontSize:'0.82rem'}}>{item.period}</span>
              </div>
              <div style={{color:'var(--accent)', fontSize:'0.85rem', fontWeight:600, marginBottom:'0.5rem'}}>{item.org}</div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        {/* Projects & Volunteering */}
        <h2 style={{fontSize:'1.2rem', fontWeight:700, letterSpacing:'-0.02em', marginBottom:'0.75rem'}}>
          {t('projectsTitle')}
        </h2>
        <div className="timeline" style={{marginBottom:'2.5rem'}}>
          {projects.map((item) => (
            <article key={item.role + item.org} className="timelineItem">
              <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'0.25rem', marginBottom:'0.4rem'}}>
                <h3 style={{margin:0}}>{item.role}</h3>
                <span style={{color:'var(--muted)', fontSize:'0.82rem'}}>{item.period}</span>
              </div>
              <div style={{color:'var(--accent)', fontSize:'0.85rem', fontWeight:600, marginBottom:'0.5rem'}}>{item.org}</div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        {/* Skills */}
        <h2 style={{fontSize:'1.2rem', fontWeight:700, letterSpacing:'-0.02em', marginBottom:'0.75rem'}}>
          {t('skillsTitle')}
        </h2>
        <div className="resumeGrid">
          <article className="resumeBlock">
            <h2>Soft skills</h2>
            <p>{skills.soft}</p>
          </article>
          <article className="resumeBlock">
            <h2>{lang === 'it' ? 'Lingue' : 'Languages'}</h2>
            <p>{skills.languages}</p>
          </article>
          <article className="resumeBlock">
            <h2>Digital</h2>
            <p>{skills.digital}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
