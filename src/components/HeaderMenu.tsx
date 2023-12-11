import { Box, Button, Container, Flex, Group, Header, MediaQuery } from "@mantine/core";
import CategoryDropdown from "./CategoryDropdown";
import AboutShopDropdown from "./AboutShopDropdown";

function HeaderMenu() {
  return (
    <Box bg={"white"} py={"md"}>
      <Container>
        <Flex justify={"space-between"} h={"100%"} align={"center"}>
          <Group>
            <CategoryDropdown />
          </Group>
          <Group>
            <Flex>
              <AboutShopDropdown />

              <Button variant="subtle" color="gray.9">
                วิธีการสั่งซื้อ
              </Button>

              <Button variant="subtle" color="gray.9">
                การสั่งซื้อของฉัน
              </Button>
              <Button variant="subtle" color="gray.9">
                บทความทั้งหมด
              </Button>
              <Button variant="subtle" color="gray.9">
                ติดต่อร้านค้า
              </Button>
            </Flex>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}

export default HeaderMenu;
