import { Menu, Group, Text, Avatar, ActionIcon, createStyles } from "@mantine/core";
import {
  IconSettings,
  IconTrash,
  IconChevronRight,
  IconLogin,
  IconPaperclip,
  IconWallpaper,
  IconAddressBook,
  IconHeart,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/AuthContext";

export default function MenuDropdownProfile() {
  const navigate = useNavigate();

  const { user, logout, loggedIn } = useAuth();
  return (
    <div>
      <Group position="center">
        <Menu withArrow width={200} position="bottom" transitionProps={{ transition: "pop" }}>
          <Menu.Target>
            <ActionIcon>
              <Avatar src={user?.image} radius={"lg"} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            {loggedIn ? (
              <>
                <Menu.Item icon={<IconPaperclip stroke={1.5} />} onClick={() => navigate("/account/order")}>
                  <Text fw={"bold"}>การสั่งซื้อของฉัน</Text>
                </Menu.Item>
                <Menu.Item icon={<IconWallpaper stroke={1.5} />} onClick={() => navigate("/account/setting")}>
                  <Text fw={"bold"}>บัญชีของฉัน</Text>
                </Menu.Item>
                <Menu.Item icon={<IconAddressBook stroke={1.5} />} onClick={() => navigate("/account/address-setting")}>
                  <Text fw={"bold"}>ที่อยู่ในการจัดส่ง</Text>
                </Menu.Item>
                <Menu.Item icon={<IconHeart stroke={1.5} />} onClick={() => navigate("/account/favorite")}>
                  <Text fw={"bold"}>สินค้าที่ชอบ</Text>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red" icon={<IconTrash stroke={1.5} />} onClick={() => logout()}>
                  <Text fw={"bold"}>ออกจากระบบ</Text>
                </Menu.Item>
              </>
            ) : (
              <Menu.Item icon={<IconLogin />} onClick={() => navigate("/signin")}>
                <Text fw={"bold"}>เข้าสู่ระบบ</Text>
              </Menu.Item>
            )}
          </Menu.Dropdown>
        </Menu>
      </Group>
    </div>
  );
}
