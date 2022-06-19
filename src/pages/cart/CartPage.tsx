import React, { useEffect, useState } from 'react';
import Banner from "../../components/elements/banner/Banner";
import Heading from "../../components/elements/Heading";
import Navbar from "../../components/navbar/Navbar"
import CartSummary from "./CartSummary";
import { ButtonStyles, Wrapper } from "./index.styles"
import { useAppSelector } from '../../utils/hooks';
import { cartProducts } from '../../selectors/cart';
import CartList from "./CartList";
import { ProductItemProps } from '../../components/products/ProductPreview';


export interface ButtonStyledProps extends React.ComponentPropsWithoutRef<"button"> {
    aspect: boolean,
}




const CartPage = () => {

    const [cartItems, setCartItems] = useState<ProductItemProps[]>([]);

    const cartElements = useAppSelector(cartProducts);

    useEffect(() => {

        if (cartElements.length > 0) {
            setCartItems(cartElements);
        }

    }, [cartElements]);

    return (
        <Wrapper>
            <Navbar />
            <Banner className="cartBanner" customHeight={40}>
                <Heading attrLevel="h1" className="bannerTitle" text="Bubu in the house! get 60% OFF!" />
            </Banner>
            <div className="cartContainer">
                <Heading attrLevel="h2" className="title" text=" YOUR BAG" />
                <div className="topCartContainer">
                    <ButtonStyles className="btn top" type="submit" aspect={false}  >
                        CONTINUE SHOPPING
                    </ButtonStyles>
                    <div className="topTitle">
                        <Heading attrLevel="h3" className="cartTextAmount" text="Shopping Bag (2)" />
                        <Heading attrLevel="h3" className="WishListTextAmount" text="Your Wishlist (0)" />
                    </div>
                    <ButtonStyles className="btn top" type="submit" aspect >
                        CHECKOUT NOW
                    </ButtonStyles>
                </div>
                <div className="bottomCartContainer">
            <div className="productInfo">
                <CartList listData={cartItems} />
                </div>
                </div>
            </div>
            <CartSummary />
        </Wrapper>

    )
};

export default CartPage;