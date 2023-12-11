import { Button, Menu } from "@mantine/core";
import { IconChevronDown, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function AboutShopDropdown() {
  const navigate = useNavigate();
  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button variant="subtle" rightIcon={<IconChevronDown />} color="gray.9">
            เกี่ยวกับร้าน
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>รายละเอียดร้าน</Menu.Item>
          <Menu.Item onClick={() => navigate("/store/faqs")}>คำถามที่พบบ่อย</Menu.Item>
          <Menu.Item>คะแนนร้านค้า</Menu.Item>
          <Menu.Item>นโยบายความเป็นส่วนตัว</Menu.Item>
          <Menu.Item>นโยบายการคืนสินค้า</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default AboutShopDropdown;
