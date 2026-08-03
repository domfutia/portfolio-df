import { getTranslations } from 'next-intl/server';
import { Flex, Line, Text } from '@once-ui-system/core';

export async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="siteFooter">
      <Line />
      <Flex
        className="container"
        horizontal="center"
        vertical="center"
        paddingY="24"
      >
        <Text className="footerText" variant="body-default-s" onBackground="neutral-weak">
          {t('text')}
        </Text>
      </Flex>
    </footer>
  );
}