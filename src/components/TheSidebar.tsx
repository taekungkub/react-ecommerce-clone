import { Box, Button, Card, Flex, Grid, Paper, ScrollArea, Text } from "@mantine/core";
import {
  IconAddressBook,
  IconAward,
  IconBook2,
  IconInfoCircle,
  IconLanguage,
  IconLogin,
  IconMessage,
  IconReportAnalytics,
  IconShoppingBag,
  IconShoppingCartPlus,
} from "@tabler/icons-react";

function TheSidebar() {
  const mockDataAbout = [
    { title: "รายละเอียดร้าน", icon: IconShoppingBag, path: "/" },
    { title: "วิธีการสั่งซื้อ", icon: IconShoppingCartPlus, path: "/" },
    { title: "คะแนนร้านค้า", icon: IconAward, path: "/" },
    { title: "คำถามที่พบบ่อย", icon: IconInfoCircle, path: "/" },
  ];

  const mockDataMenu = [
    { title: "บทความทั้งหมด", icon: IconBook2, path: "/" },
    { title: "ติดต่อร้านค้า", icon: IconMessage, path: "/" },
    { title: "นโยบายความเป็นส่วนตัว", icon: IconAddressBook, path: "/" },
    { title: "นโยบายการคืนสินค้า", icon: IconReportAnalytics, path: "/" },
    { title: "เปลี่ยนภาษา", icon: IconLanguage, path: "/" },
  ];

  const AboutList = mockDataAbout.map((v) => (
    <Grid.Col span={6} key={v.title}>
      <Card bg={"gray.0"}>
        <v.icon size={"3rem"} />
        <Text fw={"bold"} mt={5} color="gray.7">
          {v.title}
        </Text>
      </Card>
    </Grid.Col>
  ));

  const MenuList = mockDataMenu.map((v) => (
    <div key={v.title}>
      <Card bg={"gray.0"} mt={12}>
        <Flex align={"center"}>
          <v.icon size={"2rem"} color="gray" />
          <Text fw={"bold"} color="gray.7" ml={"sm"}>
            {v.title}
          </Text>
        </Flex>
      </Card>
    </div>
  ));
  return (
    <>
      <ScrollArea>
        <Box pb={"lg"} px={"sm"} mt={12}>
          <Card withBorder>
            <Text align="center" my={12}>
              คุณยังไม่ได้เข้าสู่ระบบ
            </Text>
            <Button size="lg" fullWidth leftIcon={<IconLogin />}>
              Signin
            </Button>
          </Card>

          <Text c="dimmed" mt={12}>
            เกี่ยวกับร้าน
          </Text>
          <Grid>{AboutList}</Grid>
          {MenuList}
        </Box>
      </ScrollArea>
    </>
  );
}

export default TheSidebar;
