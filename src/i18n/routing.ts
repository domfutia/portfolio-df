import {defineRouting} from 'next-intl/routing';
import {siteSettings} from '@/config/site.settings';

export const routing = defineRouting({
  locales: [...siteSettings.locales],
  defaultLocale: siteSettings.defaultLocale
});
