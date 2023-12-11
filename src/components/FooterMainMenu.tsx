import { ActionIcon, Affix, Box, Button, Card, Flex, Footer, Group, Text, Transition, createStyles, rem } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { IconCategory, IconClipboardCheck, IconHome, IconMenuOrder, IconShoppingCart } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import CartDrawer from "./CartDrawer";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    borderTopLeftRadius: theme.radius.lg,
    borderTopRightRadius: theme.radius.lg,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {},
}));

function FooterMainMenu() {
  const mockData = [
    {
      title: "หน้าแรก",
      icon: IconHome,
      path: "/",
    },
    {
      title: "หมวดหมู่",
      icon: IconCategory,
      path: "/category/list",
    },
    {
      title: "การสั่งซื้อ",
      icon: IconClipboardCheck,
      path: "/order",
    },
    {
      title: "ตะกร้า",
      icon: IconShoppingCart,
    },
  ];

  const navigate = useNavigate();

  const Items = mockData.map((v) => (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      key={v.title}
      onClick={() => {
        v.path ? navigate(v.path) : open();
      }}
    >
      <ActionIcon>
        <Text align="center">
          <v.icon size={"1.5rem"} />
        </Text>
      </ActionIcon>
      <Text fz={14} color={"dimmed"} align="center" mt={5}>
        {v.title}
      </Text>
    </Flex>
  ));

  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card withBorder h={80} shadow={"md"} className={classes.wrapper}>
        <Flex justify={"space-around"} align={"center"}>
          {Items}
        </Flex>
      </Card>

      <CartDrawer opened={opened} close={close} />
    </>
  );
}

export default FooterMainMenu;
