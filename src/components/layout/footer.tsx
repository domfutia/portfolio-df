import {getTranslations} from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <p>{t('text')}</p>
      </div>
    </footer>
  );
}
