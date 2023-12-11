import { CartItemTy } from "@/types/Common.type";
import { removeFromCart } from "@/store/slices/cartSlice";
import { useAppDispatch } from "@/store/store";
import { ActionIcon, Avatar, Box, Card, Flex, Group, Text, ThemeIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

interface Props {
  data: CartItemTy;
}

function CardCartItem({ data }: Props) {
  const dispatch = useAppDispatch();

  return (
    <>
      <Card radius={"md"} mt={12} p={20}>
        <Card.Section>
          <Group position="apart" noWrap>
            <Flex align={"center"} w={"100%"}>
              <Box ml={"sm"}>
                <Text color={"dimmed"} fz={14} lineClamp={1}>
                  {data.title}
                </Text>
                <Text color={"dimmed"} fz={"sm"}>
                  ${data.price} x {data.quantity}
                </Text>
              </Box>
            </Flex>
            <Group position="right">
              <Text color={"pink"} fz={"xs"}>
                ${data.totalPrice}
              </Text>
            </Group>

            <ActionIcon variant="light" color="red" onClick={() => dispatch(removeFromCart(data))}>
              <IconTrash size={"1rem"} />
            </ActionIcon>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
}

export default CardCartItem;
