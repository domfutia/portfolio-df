import { Flex, Heading, Text } from '@once-ui-system/core';

type SectionIntroProps = {
  title: string;
  description?: string;
  intro?: string;
};

export function SectionIntro({
  title,
  description,
  intro
}: SectionIntroProps) {
  const text = description ?? intro;

  return (
    <Flex className="sectionIntro" direction="column" gap="8">
      <Heading as="h2" variant="display-strong-s">
        {title}
      </Heading>
      {text ? (
        <Text variant="body-default-m" onBackground="neutral-weak">
          {text}
        </Text>
      ) : null}
    </Flex>
  );
}