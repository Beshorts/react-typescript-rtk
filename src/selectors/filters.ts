import { createSelector } from '@reduxjs/toolkit';
import { productsFilterSelector } from '../features/filters/productsFilterSlice';
import { selectAllProducts } from '../features/products/productsSlice';

export const productsByCategory = createSelector(
    selectAllProducts,
    productsFilterSelector,
    (entities, filterBy) => entities.filter(elem => 
        elem.category === filterBy) 
);