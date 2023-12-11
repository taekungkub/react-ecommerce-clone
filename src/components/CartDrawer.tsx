import { cartSelector, getCartTotal } from "@/store/slices/cartSlice";
import { Box, Button, Card, Drawer, Group, Text, Title, createStyles, useMantineTheme } from "@mantine/core";
import { useSelector } from "react-redux";
import CardCartItem from "./CardCartItem";
import { CartItemTy } from "@/types/Common.type";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
  opened: boolean;
  close: () => void;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    background: theme.colors.gray[0],
  },
  body: {
    padding: "0",
    height: "calc(100% - 200px)",
    overflow: "hidden",
    overflowY: "auto",
    boxSizing: "border-box",
  },
}));

function CartDrawer({ opened, close }: Props) {
  const cartStore = useSelector(cartSelector);

  const cartList = cartStore.carts;

  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartTotal);
  }, [opened, cartStore.carts]);

  const Items = cartList.map((v: CartItemTy) => <CardCartItem key={v.id} data={v} />);

  const matches = useMediaQuery("(max-width: 48em)");

  return (
    <>
      <Drawer
        classNames={{ content: classes.wrapper, header: classes.wrapper, body: classes.body }}
        opened={opened}
        onClose={close}
        position={!matches ? "right" : "bottom"}
        title="Cart"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        size={!matches ? "" : "100%"}
      >
        {!cartList.length && (
          <Box px={20} sx={{ display: "grid", height: "100%", alignItems: "center" }}>
            <Text color={"dimmed"} align="center">
              คุณยังไม่ได้เลือกสินค้า
            </Text>
          </Box>
        )}
        <Box px={20}>{Items}</Box>
        <Card w={"100%"} bg={"white"} withBorder sx={{ position: "fixed", bottom: 0, left: 0 }} pb={10}>
          <Group position="apart" mb={20}>
            <Title order={5} color="pink">
              ราคา (ยังไม่รวมค่าจัดส่ง)
            </Title>
            <Title order={4} color="pink">
              {cartStore.totalAmount}.-
            </Title>
          </Group>

          <Button fullWidth color="pink" size="lg">
            สั่งสินค้า
          </Button>
        </Card>
      </Drawer>
    </>
  );
}

export default CartDrawer;
