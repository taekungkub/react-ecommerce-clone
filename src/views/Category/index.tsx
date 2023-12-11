import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { fetchCategoryProducts, getAllCategoryProduct } from "../../store/slices/categorySlice";
import { useParams, useSearchParams } from "react-router-dom";
import CardProduct from "../../components/CardProdct";
import { Grid } from "@mantine/core";
import PageTitleCategory from "../../components/PageTitleCategory";
import SortDropdown from "@/components/SortDropdown";
import useFilterProduct from "@/hooks/useFilterProduct";

function CategoryPage() {
  const categoryProducts = useSelector(getAllCategoryProduct);

  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  const { productFilter } = useFilterProduct({
    data: categoryProducts,
    sort: {
      price: sort ? sort : undefined,
    },
  });

  const mockData = [
    { label: "ราคาต่ำไปสูง", value: "lowest_price" },
    { label: "ราคาสูงไปต่ำ", value: "hihgest_price" },
    { label: "ตามสินค้าที่มีในสต๊อก", value: "stock" },
  ];

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategoryProducts(name as string));
  }, [dispatch, name]);

  const Items = productFilter.map((v) => (
    <Grid.Col xs={6} sm={4} key={v.id}>
      <CardProduct data={v} />
    </Grid.Col>
  ));

  return (
    <>
      <PageTitleCategory title={name as string} filter={<SortDropdown data={mockData} />} />
      <Grid>{Items}</Grid>
    </>
  );
}

export default CategoryPage;
