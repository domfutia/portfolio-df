export type SubstackArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover?: string;
  tags?: string[];
  published: true;
  source: 'substack';
  externalUrl: string;
  readingTime?: string;
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function parseDate(raw: string): string {
  try {
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    return d.toISOString().slice(0, 10);
  } catch {
    return raw;
  }
}

function deterministicSlug(url: string): string {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    const char = url.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return `ss-${Math.abs(hash).toString(36)}`;
}

function extractBetween(str: string, open: string, close: string): string | null {
  const start = str.indexOf(open);
  if (start === -1) return null;
  const end = str.indexOf(close, start + open.length);
  if (end === -1) return null;
  return str.slice(start + open.length, end);
}

function extractThumbnail(itemXml: string): string | undefined {
  const mediaMatch = itemXml.match(/<media:content[^>]+url="([^"]+)"/);
  if (mediaMatch) return mediaMatch[1];

  const enclosureMatch = itemXml.match(/<enclosure[^>]+url="([^"]+)"/);
  if (enclosureMatch) return enclosureMatch[1];

  const cdataMatch = itemXml.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
  if (cdataMatch) {
    const imgMatch = cdataMatch[1].match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch) return imgMatch[1];
  }

  const encodedMatch = itemXml.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/);
  if (encodedMatch) {
    const imgMatch = encodedMatch[1].match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch) return imgMatch[1];
  }

  return undefined;
}

function parseItems(xml: string): SubstackArticle[] {
  const items: SubstackArticle[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match: RegExpExecArray | null;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const titleCdata = extractBetween(itemXml, '<title><![CDATA[', ']]></title>');
    const titlePlain = extractBetween(itemXml, '<title>', '</title>');
    const title = stripHtml((titleCdata ?? titlePlain ?? '').trim());

    const link = extractBetween(itemXml, '<link>', '</link>') ?? '';
    const externalUrl = link.trim();

    const pubDateRaw = extractBetween(itemXml, '<pubDate>', '</pubDate>') ?? '';
    const date = parseDate(pubDateRaw.trim());

    const descCdata = extractBetween(itemXml, '<description><![CDATA[', ']]></description>');
    const descPlain = extractBetween(itemXml, '<description>', '</description>');
    const description = stripHtml(descCdata ?? descPlain ?? '').slice(0, 280);

    const cover = extractThumbnail(itemXml);
    const slug = deterministicSlug(externalUrl || title);

    if (!title || !externalUrl) continue;

    items.push({
      slug,
      title,
      description,
      date,
      cover,
      tags: [],
      published: true,
      source: 'substack',
      externalUrl
    });
  }

  return items;
}

export async function getSubstackPosts(): Promise<SubstackArticle[]> {
  try {
    const res = await fetch('https://domfutia.substack.com/feed', {
      next: { revalidate: 3600 }
    });

    if (!res.ok) return [];

    const xml = await res.text();
    return parseItems(xml);
  } catch {
    return [];
  }
}