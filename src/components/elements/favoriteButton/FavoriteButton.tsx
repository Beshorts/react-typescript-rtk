import React, { memo } from 'react';
import { FavoriteBorderOutlined, FavoriteSharp } from '@mui/icons-material';
import { ProductItemProps } from '../../products/ProductPreview';

interface FavoriteProps extends React.ComponentPropsWithoutRef<'div'> {
    isFavorited: ProductItemProps['id'],
}

const FavoriteButton = ({ isFavorited, onClick }: FavoriteProps) => {

    return (
        <div
            className='icon'
            aria-label={isFavorited ? "remove from favorites" : " add to favorites"}
            onClick={onClick}
        >
            {
                isFavorited ?
                    <FavoriteSharp color="warning" />
                    : <FavoriteBorderOutlined />
            }
        </div>

    )
};

export default memo(FavoriteButton);