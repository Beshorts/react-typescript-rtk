import React, { lazy } from 'react';
import { Add, Remove } from "@mui/icons-material";
import Heading from "../../components/elements/Heading";
import SelectInlineOptions from "../../components/selectInlineOptions/SelectInlineOptions";
import { Hr } from "./index.styles";
import { ProductItemProps } from '../../components/products/ProductPreview';

// lazy media
const Image = lazy(() => import('../../components/elements/Image'));

export interface CartProps extends React.ComponentPropsWithoutRef<"div"> {
    item: ProductItemProps,
}

const Cart = ({ item }: CartProps) => {

    const { title, image, id, price } = item;


    return (
        <div className="product">
            <div className="productDetail">
                <Image className="imageProduct" src={image} alt={title} />
                <div className="details">
                    <Heading attrLevel="h1" className="productTitle" text={title} />
                    <Heading attrLevel="h2" className="productId" text={`Id: ${id}`} />
                    <SelectInlineOptions
                        titleOptions="Color"
                        filterColor={["black"]} />
                    <Heading attrLevel="h2" className="productSize" text="Size: 37.5" />
                </div>
            </div>
            <div className="priceDetail">
                <div className="productAmountContainer">
                    <Add />
                    <Heading attrLevel="h4" className="productAmount" text="2" />
                    <Remove />
                </div>
                <Heading attrLevel="h4" className="productActualPrice" text={`Price: ${price}`} />
            </div>
            <Hr />
        </div>
    )
};

export default React.memo(Cart);