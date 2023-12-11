import { ProductTy } from "@/types/Common.type";
import { Carousel } from "@mantine/carousel";
import { Flex, Image, Paper, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";

const useStyles = createStyles({
  image: {
    border: "2px solid transparent ",
  },
  imageActive: {
    border: "2px solid tomato",
  },
});

interface Props {
  data?: ProductTy | null;
  onToggle: () => void;
  index: number;
  onIndexChange: (index: number) => void;
}

function SlideImageDetail({ data, onToggle, index, onIndexChange }: Props) {
  const [imageIndex, setImageIndex] = useState(index);

  const { classes, cx } = useStyles();

  useEffect(() => {
    onIndexChange(imageIndex);
  }, [imageIndex]);

  const Items = data?.images.map((image, i) => (
    <Carousel.Slide key={image}>
      <Image src={image} fit="contain" style={{ cursor: "pointer" }} mah={500} height={500} onClick={onToggle} />
    </Carousel.Slide>
  ));

  const Items2 = data?.images.map((image, i) => (
    <Carousel.Slide key={image}>
      <Paper
        key={i}
        radius={"md"}
        h={"100%"}
        sx={{ background: "white", overflow: "hidden", cursor: "pointer" }}
        onClick={() => setImageIndex(i)}
        className={cx(classes.image, { [classes.imageActive]: imageIndex === i })}
      >
        <Image src={image} fit="contain" mah={250} height={100} onClick={() => setImageIndex(i)} bg={"white"} h={"100%"} />
      </Paper>
    </Carousel.Slide>
  ));

  const Items3 = data?.images.map((image, i) => (
    <Paper
      key={i}
      radius={"md"}
      h={"100%"}
      bg={"white"}
      sx={{ overflow: "hidden" }}
      onClick={() => setImageIndex(i)}
      className={cx(classes.image, { [classes.imageActive]: imageIndex === i })}
    >
      <Image src={image} fit="contain" width={100} height={100} bg={"white"} />
    </Paper>
  ));
  return (
    <>
      <Carousel
        mah={500}
        height={"500"}
        withControls={false}
        initialSlide={imageIndex}
        onSlideChange={(index) => setImageIndex(index)}
        bg={"white"}
      >
        {Items}
      </Carousel>
      {/* <Carousel
        draggable={false}
        mah={250}
        height={"auto"}
        slideSize="20%"
        slideGap="md"
        align={"start"}
        slidesToScroll={"auto"}
        withControls={false}
        initialSlide={imageIndex}
        mt={12}
      >
        {Items2}
      </Carousel> */}
      <Flex wrap={"wrap"} justify={{ base: "center", sm: "start" }} gap={10} mt={12}>
        {Items3}
      </Flex>
    </>
  );
}

export default SlideImageDetail;
