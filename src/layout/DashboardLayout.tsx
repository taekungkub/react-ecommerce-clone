import { useState } from "react";
import { AppShell, Navbar, Header, Text, MediaQuery, Burger, useMantineTheme, Flex, Box, Group, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import MenuDropdownProfile from "../components/MenuDropdownProfile";
import ButtonCart from "../components/ButtonCart";
import LanguagePicker from "../components/LanguagePicker";
import HeaderMenu from "../components/HeaderMenu";
import TheSidebar from "../components/TheSidebar";
import FooterMainMenu from "../components/FooterMainMenu";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Navbar hiddenBreakpoint="sm" hidden={!opened}>
            <TheSidebar />
          </Navbar>
        </MediaQuery>
      }
      header={
        <Header height={{ base: 60 }} py={"md"}>
          <Container>
            <Flex wrap={"nowrap"} justify={"space-between"} h={"100%"} align={"center"}>
              <Flex>
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={theme.colors.gray[6]} mr="xs" />
                </MediaQuery>
                <Box>
                  <Text component="a" href="/" fw={"bold"}>
                    Mantine.dev
                  </Text>
                </Box>
              </Flex>

              <Group>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Box>
                    <LanguagePicker />
                  </Box>
                </MediaQuery>
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Box>
                    <MenuDropdownProfile />
                  </Box>
                </MediaQuery>
                <ButtonCart />
              </Group>
            </Flex>
          </Container>

          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box>
              <HeaderMenu />
            </Box>
          </MediaQuery>
        </Header>
      }
    >
      <Container pt={{ sm: 60 }}>
        <Outlet />
      </Container>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Box mt={80}>
          <FooterMainMenu />
        </Box>
      </MediaQuery>
    </AppShell>
  );
}
