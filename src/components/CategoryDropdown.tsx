import { Menu, Button, useMantineTheme, createStyles } from "@mantine/core";
import { IconChevronDown, IconAlignJustified } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { categorySelector, fetchCategories } from "../store/slices/categorySlice";
import { useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryDropdown() {
  const categories = useSelector(categorySelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const Items = categories.categories.map((category) => (
    <Menu.Item key={category} onClick={() => navigate("/category/" + category)}>
      {category}
    </Menu.Item>
  ));

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="light" leftIcon={<IconAlignJustified />} rightIcon={<IconChevronDown />} color="gray.9">
          หมวดหมู่สินค้า
        </Button>
      </Menu.Target>

      <Menu.Dropdown>{Items}</Menu.Dropdown>
    </Menu>
  );
}
