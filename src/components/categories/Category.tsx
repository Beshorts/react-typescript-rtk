import React, { lazy, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonCategory, CategoryStyles } from './index.styles';
import { CategoryItemProps } from '../../API/localData';
import Heading from '../elements/Heading';
import { useAppDispatch } from '../../utils/hooks';
import { getProductsFilteredBy } from '../../features/filters/productsFilterSlice';

// lazy media
const Image = lazy(() => import('../elements/Image'));

export interface CategoryProps extends React.ComponentPropsWithoutRef<'div'> {
    item: CategoryItemProps,

}


const CategoryItem = ({ item }: CategoryProps) => {


    const dispatch = useAppDispatch();

    const { img, title, cat } = item;

    const [category, setCategory] = useState(cat);
    const navigate = useNavigate();

    // destructure data

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const value = event.currentTarget.value;
        if (value) {
            setCategory(value);
            dispatch(getProductsFilteredBy(category))
            console.log(category)
            navigate(`/products/${category}`);
        }
    }

    return (
        <CategoryStyles className="categoryContainer" >
            <Image className='imgCategory' src={img} alt={title} />
            <div className='infoCategory'>
                <Heading className='titleCategory' attrLevel='h1' text={title} />
                <ButtonCategory className='btn category' as="button" type='submit' name="btn submit" value={cat} onClick={handleClick}>
                    EXPLORE
                </ButtonCategory>
            </div>
        </CategoryStyles>
    )
}

export default CategoryItem;