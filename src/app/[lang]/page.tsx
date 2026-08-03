import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Text
} from '@once-ui-system/core';
import { navigation } from '@/config/navigation';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  setRequestLocale(lang);
  const t = await getTranslations('home');
  const tNav = await getTranslations('nav');

  const sectionLinks = navigation.filter((item) => item.key !== 'home');

  return (
    <Flex as="div" direction="column">
      <section className="heroSection">
        <div className="container">
          <Grid columns="2" gap="24" className="heroGrid">
            <Card padding="32" radius="xl" border="neutral-medium">
              <Flex direction="column" gap="20" vertical="start">
                <Text className="eyebrow" variant="body-default-s">
                  {t('eyebrow')}
                </Text>
                <Heading as="h1" variant="display-strong-l">
                  {t('title')}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak">
                  {t('description')}
                </Text>
                <Flex gap="12" wrap>
                  <Button asChild size="m" variant="primary">
                    <Link href={`/${lang}/research`}>{t('primary')}</Link>
                  </Button>
                  <Button asChild size="m" variant="secondary">
                    <Link href={`/${lang}/blog`}>{t('secondary')}</Link>
                  </Button>
                </Flex>
              </Flex>
            </Card>

            <Card padding="0" radius="xl" border="neutral-medium" className="heroMediaCard">
              <Image
                src="/images/profile/portrait.svg"
                alt="Portrait placeholder"
                width={800}
                height={1000}
                priority
                className="heroPortrait"
              />
            </Card>
          </Grid>
        </div>
      </section>

      <section className="contentSection">
        <div className="container">
          <Flex direction="column" gap="20">
            <Heading as="h2" variant="display-strong-s">
              {t('featuredTitle')}
            </Heading>
            <Grid columns="3" gap="16">
              <Card padding="24" radius="l" border="neutral-medium">
                <Flex direction="column" gap="12">
                  <Heading as="h3" variant="heading-strong-m">
                    {t('featuredResearchTitle')}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {t('featuredResearch')}
                  </Text>
                </Flex>
              </Card>
              <Card padding="24" radius="l" border="neutral-medium">
                <Flex direction="column" gap="12">
                  <Heading as="h3" variant="heading-strong-m">
                    {t('featuredWritingTitle')}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {t('featuredWriting')}
                  </Text>
                </Flex>
              </Card>
              <Card padding="24" radius="l" border="neutral-medium">
                <Flex direction="column" gap="12">
                  <Heading as="h3" variant="heading-strong-m">
                    {t('featuredDevelopmentTitle')}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {t('featuredDevelopment')}
                  </Text>
                </Flex>
              </Card>
            </Grid>
          </Flex>
        </div>
      </section>

      <section className="contentSection">
        <div className="container">
          <Flex direction="column" gap="20">
            <Heading as="h2" variant="display-strong-s">
              {t('sectionsTitle')}
            </Heading>
            <Grid columns="3" gap="24" className="heroGrid">
              {sectionLinks.map((item) => {
                const label = tNav(item.key);

                return (
                  <Button
                    key={item.key}
                    asChild
                    variant="secondary"
                    fillWidth
                    className="sectionLinkButton"
                  >
                    <Link href={`/${lang}${item.href}`}>{label}</Link>
                  </Button>
                );
              })}
            </Grid>
          </Flex>
        </div>
      </section>
    </Flex>
  );
}