import { categorySelector, fetchCategories } from "@/store/slices/categorySlice";
import { useAppDispatch } from "@/store/store";
import { Card, Group, Paper, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CategoryListPage() {
  const categories = useSelector(categorySelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const Items = categories.categories.map((category) => (
    <Card bg={"white"} mt={12} key={category} onClick={() => navigate("/category/" + category)}>
      <Group position="apart">
        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {category}
          </Text>
        </div>
        <IconChevronRight size="0.9rem" stroke={1.5} />
      </Group>
    </Card>
  ));

  return <>{Items}</>;
}

export default CategoryListPage;
