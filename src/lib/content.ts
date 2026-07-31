import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type {Locale} from '@/config/site.settings';

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover?: string;
  tags?: string[];
  published?: boolean;
  source?: 'local' | 'substack';
  externalUrl?: string;
  readingTime?: string;
};

function getDir(section: 'blog' | 'research', locale: Locale) {
  return path.join(process.cwd(), 'src', 'content', section, locale);
}

export function getCollection(section: 'blog' | 'research', locale: Locale): ArticleMeta[] {
  const dir = getDir(section, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const source = fs.readFileSync(path.join(dir, file), 'utf8');
      const {data, content} = matter(source);
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        cover: data.cover,
        tags: data.tags ?? [],
        published: data.published ?? true,
        source: data.source ?? 'local',
        externalUrl: data.externalUrl,
        readingTime: readingTime(content).text
      } satisfies ArticleMeta;
    })
    .filter((item) => item.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
