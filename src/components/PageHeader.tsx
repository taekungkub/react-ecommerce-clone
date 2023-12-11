import { Title } from "@mantine/core";

interface Props {
  title: string;
}

function PageHeader({ title }: Props) {
  return (
    <>
      <Title order={4} mb={4}>
        {title}
      </Title>
    </>
  );
}

export default PageHeader;
