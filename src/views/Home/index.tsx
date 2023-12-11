import { useSelector } from "react-redux";
import { fetchProducts, getLaptops, getProductStatus, getSkincares, getSmarthphones } from "../../store/slices/productSlice";
import { Carousel } from "@mantine/carousel";
import { useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import CardProduct from "../../components/CardProdct";
import SlideProducts from "../../components/SlideProduct";
import PageTitleProduct from "../../components/PageTitleProdut";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const products = useSelector(getSmarthphones);
  const laptops = useSelector(getLaptops);
  const skincares = useSelector(getSkincares);

  const productStatus = useSelector(getProductStatus);
  const isLoading = productStatus === "loading";
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <PageTitleProduct title="Smarthphones" onToggleViewAll={() => navigate("/category/smartphones")} />
      <SlideProducts data={products} isLoading={isLoading} />
      <PageTitleProduct title="Laptops" onToggleViewAll={() => navigate("/category/laptops")} />
      <SlideProducts data={laptops} isLoading={isLoading} />
      <PageTitleProduct title="Skincares" onToggleViewAll={() => navigate("/category/skincare")} />
      <SlideProducts data={skincares} isLoading={isLoading} />
    </>
  );
}

export default HomePage;
