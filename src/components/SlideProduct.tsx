import { Carousel } from "@mantine/carousel";
import { Skeleton, createStyles, getStylesRef, rem } from "@mantine/core";
import CardProduct from "./CardProdct";
import { ProductTy } from "../types/Common.type";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",
    background: theme.colors.blue[4],
    "&[data-active]": {
      width: rem(16),
    },
  },
}));

interface Props {
  data: ProductTy[];
  isLoading?: boolean;
}

function SlideProducts({ data, isLoading }: Props) {
  const { classes } = useStyles();
  const Items = data.map((v) => (
    <Carousel.Slide key={v.id} pb={40}>
      <CardProduct data={v} />
    </Carousel.Slide>
  ));

  if (isLoading) {
    return <Skeleton visible={isLoading} h={{ base: 60, sm: 250 }} my={20}></Skeleton>;
  }
  return (
    <>
      <Carousel
        height={"auto"}
        slideSize="33.33%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        classNames={{
          indicator: classes.carouselIndicator,
        }}
      >
        {Items}
      </Carousel>
    </>
  );
}

export default SlideProducts;
