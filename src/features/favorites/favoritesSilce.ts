import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ProductItemProps } from '../../components/products/ProductPreview';

type FavortiesProps = {
    favoritesProducts: ProductItemProps['id'][],
}



const initialState = {
    favoritesProducts: [],

} as FavortiesProps;


const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorites: (state: { favoritesProducts: ProductItemProps['id'][] }, action: PayloadAction<ProductItemProps['id']>) => {
            const id = action.payload;
            // check if id is already in state
            const favorite = state.favoritesProducts.findIndex(elem => elem === id);
            if (favorite === -1) {
                // add new item to state
                state.favoritesProducts.push(id);
            }

        },
        removeFavorite: (state: { favoritesProducts: ProductItemProps['id'][] }, action: PayloadAction<ProductItemProps['id']>) => {
            const id = action.payload;
            state.favoritesProducts.splice(
                state.favoritesProducts.findIndex(
                    elem => elem === id), 1);
        }
    }
});

export const { addFavorites, removeFavorite } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;

export const selectFavoritesState = (state: RootState) => state.favorites.favoritesProducts;