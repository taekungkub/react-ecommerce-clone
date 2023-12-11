import _ from "lodash";
import { useMemo } from "react";
import { ProductTy } from "@/types/Common.type";

interface Props {
  data: Array<ProductTy>;
  searchQuery?: string;
  sort?: {
    price?: string;
    brand?: string;
  };
}

export default function useFilterProduct(props: Props) {
  const productFilter = useMemo(() => {
    return props.data
      .filter((product: ProductTy) => {
        const searchBySetTitle = product.title.toLowerCase().match(props.searchQuery ? props.searchQuery.toLowerCase() : "");
        if (searchBySetTitle) {
          return searchBySetTitle;
        }

        const searchByBrand = product.brand.toLowerCase().match(props.searchQuery ? props.searchQuery.toLowerCase() : "");
        if (searchByBrand) {
          return searchByBrand;
        }

        return false;
      })

      .sort((a, b) => {
        if (props.sort?.price === "lowest_price") {
          return Number(a.price) - Number(b.price);
        } else if (props.sort?.price === "highest_price") {
          return Number(b.price) - Number(a.price);
        } else if (props.sort?.price === "stock") {
          return Number(b.stock) - Number(a.stock);
        }

        return 0;
      });
  }, [props.searchQuery, props.sort]);

  return {
    productFilter,
  };
}
