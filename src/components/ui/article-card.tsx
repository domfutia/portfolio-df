import Image from 'next/image';
import type { ArticleMeta } from '@/lib/content';
import {
  Card,
  Flex,
  Heading,
  SmartLink,
  Tag,
  Text
} from '@once-ui-system/core';

export function ArticleCard({
  article,
  locale,
  basePath,
  cta,
  externalCta
}: {
  article: ArticleMeta;
  locale: string;
  basePath: 'blog' | 'research';
  cta: string;
  externalCta?: string;
}) {
  const href =
    article.source === 'substack' && article.externalUrl
      ? article.externalUrl
      : `/${locale}/${basePath}/${article.slug}`;

  const external = article.source === 'substack' && article.externalUrl;

  return (
    <Card as="article" className="articleCard" radius="l" border="neutral-medium" padding="24">
      <Flex direction="column" gap="16">
        {article.cover ? (
          article.cover.startsWith('https://') ? (
            <Image
              src={article.cover}
              alt={article.title}
              width={640}
              height={360}
              className="articleCover"
            />
          ) : (
            <img src={article.cover} alt={article.title} className="articleCover" />
          )
        ) : null}

        <Flex className="articleMeta" gap="8" wrap>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {article.date}
          </Text>
          {article.readingTime ? (
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {article.readingTime}
            </Text>
          ) : null}
        </Flex>

        <Heading as="h2" variant="heading-strong-m">
          {article.title}
        </Heading>

        <Text variant="body-default-m" onBackground="neutral-weak">
          {article.description}
        </Text>

        {article.tags?.length ? (
          <Flex gap="8" wrap>
            {article.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </Flex>
        ) : null}

        <SmartLink
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {external ? externalCta ?? cta : cta}
        </SmartLink>
      </Flex>
    </Card>
  );
}