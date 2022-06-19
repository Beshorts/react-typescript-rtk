import React from "react";
import { useLocation } from "react-router-dom";
import List from "../elements/List";
import { Wrapper } from "./index.styles";
import Product, { ProductItemProps } from "./ProductPreview";

export interface ProductListProps<T> extends React.ComponentPropsWithoutRef<'section'> {
  listData: T[],
}

const ProductsList = ({ listData }: ProductListProps<ProductItemProps>) => {

  console.log("productList is rendering")

  //const { pathname } = useLocation();
  //const category = pathname.split("/")[2];

  return (
    <Wrapper className="productsList">
      <List items={listData} render={(item) => (
        <Product item={item} key={item.id} />
      )} />
    </Wrapper>
  )
};

export default ProductsList;