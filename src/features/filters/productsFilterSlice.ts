import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
    filterBy: "",
}

const productsFilterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        getProductsFilteredBy: (state: { filterBy: string; }, action: PayloadAction<string>) => {
            state.filterBy = action.payload;
        },
    },
});

// actions to dispatch
export const { getProductsFilteredBy } = productsFilterSlice.actions;

// reducer generated automatically by createSlice
export default productsFilterSlice.reducer;

// current state selector
export const productsFilterSelector = (state: RootState) => state.filters.filterBy;