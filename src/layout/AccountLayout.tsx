import { Box, Button, Flex, Grid, Menu, Paper, Text } from "@mantine/core";
import { Icon123, IconAddressBook, IconHeart, IconPaperclip } from "@tabler/icons-react";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AccountLayout() {
  const navigate = useNavigate();

  return (
    <div>
      <Grid gutter={"md"}>
        <Grid.Col md={6} lg={4}>
          <Paper p={"lg"} bg={"white"}>
            <Flex direction={"column"} gap={"md"}>
              <Box>
                <Button variant="subtle" leftIcon={<IconPaperclip />} color="dark" onClick={() => navigate("/account/order")}>
                  บัญชีของฉัน
                </Button>
              </Box>
              <Box>
                <Button variant="subtle" leftIcon={<IconAddressBook />} color="dark" onClick={() => navigate("/account/address-setting")}>
                  ที่อยู่ในการจัดส่ง
                </Button>
              </Box>
              <Box>
                <Button variant="subtle" leftIcon={<IconHeart />} color="dark" onClick={() => navigate("/account/favorite")}>
                  สินค้าที่ชอบ
                </Button>
              </Box>
            </Flex>
          </Paper>
        </Grid.Col>
        <Grid.Col md={6} lg={8}>
          <Paper p={"md"}>
            <Outlet />
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  );
}
