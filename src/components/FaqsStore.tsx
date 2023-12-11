import { Container, Title, Accordion, createStyles, rem, Card, Group, Text, Avatar, Flex } from "@mantine/core";
import { IconMessage } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export default function FaqsStore() {
  const { classes } = useStyles();

  const mockData = [
    {
      title: "จัดส่งเป็นความลับไหม ?",
      content: "ไม่ระบุชื่อร้านหรือตัวสินค้าระบุเพียงชื่อคนส่งเท่านั้นลูกค้าสบายใจได้เลยค่ะ",
      value: "reset-password",
    },
    {
      title: "มีของส่งแมสเซนเจอร์ไหม",
      content: "ไม่มีค่ะลูกค้า ร้านอยู่ต่างจังหวัดค่ะ ต้องขอโทษด้วยนะคะ  กทม สั่งวันนี้ ส่งพรุ่งนี้ 1- 2 วันถึงค่ะ",
      value: "another-account",
    },
    {
      title: "ทำไมตรวจสอบพัสดุุไม่ได้",
      content:
        "หลังจากลูกค้าได้เลขพัสดุแล้ว หากเช็คไม่ได้ รบกวนรอหลัง 20:00 ของวันถัดไปนะคะ สินค้ากำลังรอเข้าระบบค่ะ ขออภัยในความไม่สะดวกนะคะ ?? หากเกินเวลาแล้ว รบวนติดต่อแอดมินค่ะ",
      value: "newsletter",
    },
    {
      title: "ส่งกี่วันถึง",
      content:
        "Flash จะจัดส่งภายใน 2 - 4 วัน EMS  จะจัดส่งภายใน 2 - 3 วัน ขึ้นอยู่กับจังหวัดค่ะ โดยส่งจากชลบุรีค่ะ ( จัดส่งวันภายใน 1-2 วันหลังจากทำการชำระเงิน)",
      value: "credit-card",
    },
    {
      title: "จัดส่งเมื่อไหร่",
      content: "จัดส่งวันถัดไปค่ะ หรือไม่เกิน 2 วันหลังจากทำการชำระเงินเรียบร้อยค่ะ",
      value: "date-card",
    },
  ];

  const Items = mockData.map((v) => (
    <Accordion.Item value={v.value} key={v.value}>
      <Accordion.Control>
        <Group noWrap>
          <Avatar src="https://img.icons8.com/clouds/256/000000/homer-simpson.png" radius="xl" size="lg" />
          <div>
            <Text>{v.title}</Text>
          </div>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <Flex>
          <div>
            <IconMessage size={"1.5rem"} />
          </div>
          <Text ml={"sm"}>{v.content}</Text>
        </Flex>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Card className={classes.wrapper} mt={12}>
      <Accordion>{Items}</Accordion>
    </Card>
  );
}
