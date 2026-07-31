import fs from 'node:fs';
import path from 'node:path';
import type {Locale} from '@/config/site.settings';

export function getMdxPath(section: 'blog' | 'research', locale: Locale, slug: string) {
  return path.join(process.cwd(), 'src', 'content', section, locale, `${slug}.mdx`);
}

export function hasMdxFile(section: 'blog' | 'research', locale: Locale, slug: string) {
  return fs.existsSync(getMdxPath(section, locale, slug));
}
