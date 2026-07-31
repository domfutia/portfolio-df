export const siteSettings = {
  name: 'Domenico Futia',
  role: {
    it: 'Filosofo della mente, ricercatore e sviluppatore front-end',
    en: 'Philosophy of mind scholar, researcher, and front-end developer'
  },
  email: 'domenico@example.com',
  location: {
    it: 'Pisa, Italia',
    en: 'Pisa, Italy'
  },
  defaultLocale: 'it',
  locales: ['it', 'en'] as const,
  defaultTheme: 'light',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    substack: 'https://yourname.substack.com'
  }
};

export type Locale = (typeof siteSettings.locales)[number];
