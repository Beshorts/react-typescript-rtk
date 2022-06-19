import { combineReducers } from '@reduxjs/toolkit';
import products from '../features/products/productsSlice';
import filters from '../features/filters/productsFilterSlice';
import favorites from '../features/favorites/favoritesSilce';
import cart from '../features/cart/cartSlice';


import {
    persistReducer,
} from 'redux-persist';

// using storageSession instead of storage to extends webStorage and normaliz data types => see typeScript docs.ts onClick "storageSession" than "webStrorage".
import storageSession from 'redux-persist/lib/storage';

// declaring rootReducer in advance to get STATE type and extract its ReturnType
export const rootReducer = combineReducers({
    products,
    filters,
    favorites,
    cart,
    // auth,
});

const persistConfig = {
    key: 'root',
    version: 1,
    /* for this project cache/persist data only in current browser session:
     keep the cache intact on refresh page and purge it on closing browser */
    storage: storageSession,
    // clear redux persist state on close app => use it on development
    //blacklist: ['products', 'favorites', 'cart'],
    withelist: ['products', 'favorite', 'cart'],
};

export type RootState = ReturnType<typeof rootReducer>;

export const persistedReducer = persistReducer(persistConfig, rootReducer);