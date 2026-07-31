import {redirect} from 'next/navigation';
import {siteSettings} from '@/config/site.settings';

export default function RootPage() {
  redirect(`/${siteSettings.defaultLocale}`);
}
