import { Button, Menu } from "@mantine/core";
import { IconSortDescending2 } from "@tabler/icons-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  data: {
    label: string;
    value: string;
  }[];
}

function SortDropdown({ data }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get("sort") || data[0].value);

  const Items = data.map((v) => (
    <Menu.Item
      key={v.value}
      color={sort === v.value ? "pink.4" : ""}
      onClick={() => {
        setSort(v.value);
        searchParams.set("sort", v.value);
        setSearchParams(searchParams, {
          replace: true,
        });
      }}
    >
      {v.label}
    </Menu.Item>
  ));

  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button variant="light" rightIcon={<IconSortDescending2 />} color="gray.9">
            Filter
          </Button>
        </Menu.Target>

        <Menu.Dropdown>{Items}</Menu.Dropdown>
      </Menu>
    </>
  );
}

export default SortDropdown;
