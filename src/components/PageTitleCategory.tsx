import { Flex, Group, Title } from "@mantine/core";
import SortDropdown from "./SortDropdown";
import React, { PropsWithChildren } from "react";

interface Props {
  title: string;
  filter: React.ReactNode;
}
function PageTitleCategory({ title, filter }: Props) {
  return (
    <>
      <Group position="apart" mb={12}>
        <Flex align={"center"}>
          <Title order={4} mt={4} ml={"md"}>
            {title}
          </Title>
        </Flex>
        {filter}
      </Group>
    </>
  );
}

export default PageTitleCategory;
