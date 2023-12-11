import { AspectRatio, Badge, Card, Divider, Group, Image, Paper, Text, createStyles, getStylesRef, rem } from "@mantine/core";
import { ProductTy } from "../types/Common.type";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    [`&:hover .${getStylesRef("image")}`]: {
      scale: "1.1",
    },
    position: "relative",
    overflow: "hidden",
  },
  innerCard: {
    overflow: "hidden",
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  image: {
    ref: getStylesRef("image"),
    transition: "all 500ms ease",
  },
  discount: {
    position: "absolute",
    top: "15px",
    right: "15px",
    padding: "5px",
    borderRadius: "999px",
    background: theme.colors.blue[4],
  },
}));

interface Props {
  data: ProductTy;
}
function CardProduct({ data }: Props) {
  const navigate = useNavigate();

  const { classes } = useStyles();

  return (
    <>
      <Card
        shadow="md"
        radius={"md"}
        onClick={() => navigate("/product/" + data.id)}
        className={classes.card}
        style={{ cursor: "pointer" }}
      >
        <Card.Section className={classes.innerCard}>
          <Image src={data.thumbnail} fit="cover" height={250} className={classes.image} />
        </Card.Section>
        <Card.Section className={classes.section} mt="lg">
          <Text color={"dimmed"}>{data.title}</Text>
          <Text color="dark" fz={"bold"} mt={5}>
            ${data.price}
          </Text>
        </Card.Section>
      </Card>
    </>
  );
}

export default CardProduct;
