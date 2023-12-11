import { ProductTy } from "@/types/Common.type";
import { Carousel } from "@mantine/carousel";
import { Box, Button, Flex, Group, Image, Modal, Paper, createStyles, rem } from "@mantine/core";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  content: {
    background: "transparent",
  },
  image: {
    border: "2px solid transparent",
  },
  imageActive: {
    border: "2px solid tomato",
  },
}));

interface Props {
  data: ProductTy | null;
  setOpened: (status: boolean) => void;
  opened: boolean;
  index: number;
}

function ImageProductSlide({ data, opened, setOpened, index }: Props) {
  const { classes, cx } = useStyles();

  const [imageIndex, setImageIndex] = useState(index);

  useEffect(() => {
    setImageIndex(index);
  }, [index]);

  const Items = data?.images.map((image, i) => (
    <Carousel.Slide key={image}>
      <Paper radius={"md"} h={"100%"} bg={"white"} sx={{ overflow: "hidden" }}>
        <Image src={image} fit="contain" height={500} />
      </Paper>
    </Carousel.Slide>
  ));
  const Items2 = data?.images.map((image, i) => (
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
      <Modal
        size="lg"
        centered
        opened={opened}
        withCloseButton={false}
        onClose={() => setOpened(false)}
        classNames={{ content: classes.content }}
      >
        <Carousel
          draggable={false}
          align={"center"}
          slideGap={"md"}
          loop
          initialSlide={imageIndex}
          onSlideChange={(index) => setImageIndex(index)}
        >
          {Items}
        </Carousel>

        <Flex wrap={"wrap"} justify={"center"} gap={10} mt={12}>
          {Items2}
        </Flex>
      </Modal>
    </>
  );
}

export default ImageProductSlide;
