import { Button, Flex, Group, ThemeIcon, Title } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";

interface Props {
  title: string;
  onToggleViewAll: () => void;
}
function PageTitleProduct({ title, onToggleViewAll }: Props) {
  return (
    <>
      <Group position="apart" mb={12}>
        <Flex align={"center"}>
          <ThemeIcon color="gray.9" radius={"lg"}>
            <IconBookmarkFilled size={"1.125rem"} />
          </ThemeIcon>
          <Title order={4} mt={4} ml={"md"}>
            {title}
          </Title>
        </Flex>
        <Button variant="subtle" color="gray.9" onClick={onToggleViewAll}>
          ดูทั้งหมด
        </Button>
      </Group>
    </>
  );
}

export default PageTitleProduct;
