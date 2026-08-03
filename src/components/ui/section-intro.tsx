import { Flex, Heading, Text } from '@once-ui-system/core';

export function SectionIntro({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <Flex className="sectionIntro" direction="column" gap="8">
      <Heading as="h2" variant="display-strong-s">
        {title}
      </Heading>
      {description ? (
        <Text variant="body-default-m" onBackground="neutral-weak">
          {description}
        </Text>
      ) : null}
    </Flex>
  );
}