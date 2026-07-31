import type {Metadata} from 'next';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {AppThemeProvider} from '@/components/providers/theme-provider';
import {Header} from '@/components/layout/header';
import {Footer} from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Domenico Futia | Portfolio',
  description: 'Bilingual portfolio built with Next.js, MDX, and light/dark theme.'
};

export function generateStaticParams() {
  return routing.locales.map((lang) => ({lang}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{lang: string}>;
}) {
  const {lang} = await params;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AppThemeProvider>
            <Header locale={lang} pathname="/" />
            <main>{children}</main>
            <Footer />
          </AppThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
