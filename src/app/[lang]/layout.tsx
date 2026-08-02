import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{lang: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((lang) => ({lang}));
}

export default async function LocaleLayout({children, params}: Props) {
  const {lang} = await params;

  if (!routing.locales.includes(lang as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(lang);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}