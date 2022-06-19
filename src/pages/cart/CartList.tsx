import React from 'react';
import List from '../../components/elements/List';
import { ProductItemProps } from '../../components/products/ProductPreview';
import { ProductListProps } from '../../components/products/ProductsList';
import Cart from './Cart';



const CartList = ({listData}: ProductListProps<ProductItemProps>) => {
    return(
        <List items={listData} render={(item) => (
            <Cart item={item} key={item.id} />
          )} />


    )
};

export default CartList;