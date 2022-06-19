import React, { lazy, memo, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddRemoveCartItem, useAddRemoveFavorite } from '../../utils/hooks';
import { SearchOutlined } from '@mui/icons-material';
import FavoriteButton from '../elements/favoriteButton/FavoriteButton';
import { IconBtnContainer, ProductContainer } from './index.styles';
import CartButton from '../elements/cartButton/CartButton';
// lazy media
const Image = lazy(() => import('../elements/Image'));

export type ProductItemProps = {
    id: number,
    category: string,
    image: string,
    title: string,
    description: string,
    price: number,
    rating: {
        rate: number,
        count: number,
    },
}

export interface ProductPreviewProps extends React.ComponentPropsWithoutRef<"div"> {
    item: ProductItemProps,
}

const Product = ({ item }: ProductPreviewProps) => {
 console.log("PRODUCT PREVIEW MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
    const navigate = useNavigate();

    
    const { image, title, id } = item;

    const { isCurrentItem, favorite } = useAddRemoveFavorite(id);
    const { cart, isCurrentCartItem } = useAddRemoveCartItem(id);

    const handleClick = () => {
        navigate(`/product/${id}`);
    };

    const handleFavoritesBtn = () => {
        favorite(item);
    };

    const handleCartBtn = () => {
        cart(item);
    }

    return (
        <ProductContainer className="productContainer">
            <Suspense
                fallback={
                    <div>Loading Image...</div>
                }
            >
                <Image className='imgProduct' src={image} alt={title} />
            </Suspense>
            <IconBtnContainer as="button" type="button" name="actions" className="iconBtnContainer">
                <CartButton added={isCurrentCartItem} onClick={handleCartBtn} />
                <div className='icon' onClick={handleClick} >
                    <SearchOutlined />
                </div>
                <FavoriteButton isFavorited={isCurrentItem} onClick={handleFavoritesBtn} />
            </IconBtnContainer>
        </ProductContainer>
    )
};

export default memo(Product);