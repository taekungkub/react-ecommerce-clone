import ModalProductSlide from "@/components/ModalProductSlide";
import SlideImageDetail from "@/components/SlideImageDetail";
import useBackgroundApp from "@/hooks/useBackgroundApp";
import useToast from "@/hooks/useToast";
import { addtoCart } from "@/store/slices/cartSlice";
import { fetchOneProducts, getProduDataStatus } from "@/store/slices/productSlice";
import { getOneProduct } from "@/store/slices/productSlice";
import { useAppDispatch } from "@/store/store";
import { AppShell, Box, Button, Grid, Title, createStyles } from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const productData = useSelector(getOneProduct);
  const productStatus = useSelector(getProduDataStatus);

  const [isModalImageSlide, setIsModalImageSlide] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchOneProducts(id as string));
  }, [id, dispatch]);

  const toast = useToast();

  async function handleAddToCart() {
    if (productData) {
      dispatch(
        addtoCart({
          id: productData?.id,
          title: productData?.title,
          price: productData?.price,
          quantity: 1,
          total: productData?.stock,
          discountPercentage: productData?.discountPercentage,
        })
      );
    }
    toast.success("Add successfully");
  }
  return (
    <>
      <Grid>
        <Grid.Col md={6}>
          <SlideImageDetail
            data={productData}
            onToggle={() => setIsModalImageSlide(!isModalImageSlide)}
            onIndexChange={(imageIndex: number) => setImageIndex(imageIndex)}
            index={imageIndex}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <Box>
            <Title order={2}>{productData?.title}</Title>
            <Title order={5} color={"dimmed"} mt={20}>
              ราคาสินค้า
            </Title>
            <Title order={2} mt={12}>
              $ {productData?.price}
            </Title>
            <Button
              mt={20}
              fullWidth
              maw={300}
              size={"lg"}
              color="pink"
              leftIcon={<IconShoppingCartPlus />}
              onClick={() => handleAddToCart()}
            >
              เพิ่มลงตะกร้าสินค้า
            </Button>
          </Box>
          <ModalProductSlide data={productData} opened={isModalImageSlide} setOpened={setIsModalImageSlide} index={imageIndex} />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default ProductDetailPage;
