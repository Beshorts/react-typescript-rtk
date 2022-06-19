import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ProductItemProps } from "../../components/products/ProductPreview";
import { ApiBaseURL, APIData, APIStatus, APIError, InternalError } from '../api/ApiBaseURL';
import { RootState } from '../../app/store';



type ProductsSliceProps = {
    apiStatus: APIData,
    productsFiltered: ProductItemProps[],
}

const productsAdapter = createEntityAdapter({
    selectId: (product: ProductItemProps) => product.id,
    // ordering rendered data by categories
    sortComparer: (a, b) => b.category.localeCompare(a.category),
});

const initialState = productsAdapter.getInitialState<ProductsSliceProps>({
    apiStatus: { status: 0, error: undefined },
    productsFiltered: [],
});

{/** transforms the exception to an APIError type. 
If the exception was thrown by axios we can read the API response, 
otherwise, if the exception occurred due to our logic => set a custom error */}
export const getExceptionPayload = (ex: unknown): APIError => {
    if (typeof ex !== 'object' || !ex) {
        return InternalError;
    }
    const typedExecption = ex as APIError;
    if (ex.hasOwnProperty('message') && typeof typedExecption.message === 'string'
        && ex.hasOwnProperty('code') && typeof typedExecption.code === 'number') {
        return {
            message: typedExecption.message,
            code: typedExecption.code,
        };
    }
    return InternalError;
}

export const fetchProducts = createAsyncThunk<
    ProductItemProps[],
    void,
    {
        rejectValue: APIError
    }>(
        'products/fetchProducts', async (_, { rejectWithValue }) => {
            try {
                const response = await ApiBaseURL.get<ProductItemProps[]>('/products');
                console.log("response rendering", response.data)
                return response.data;
            } catch (err: any) {
                let error: AxiosError<APIError> = err;
                if (!error.response) {
                    throw err
                }
                return rejectWithValue(getExceptionPayload(error.response.data))
            }
        }
    );

const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state: {productsFiltered: ProductItemProps[]},action: PayloadAction<ProductItemProps[]>) => {
            state.productsFiltered = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.apiStatus.status = APIStatus.PENDING;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.apiStatus.status = APIStatus.FULFILLED;
            productsAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.apiStatus.status = APIStatus.REJECTED;
            state.apiStatus.error = action.payload;
        })
    },
});

export const { getProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;

// state products selectors
export const {
    // returns array of entities (after mapping through the Ids array)
    selectAll: selectAllProducts,
    // returns the element corresponding to the ID when state and ID will be passed
    selectById: selectProductById,
    selectIds: selectProductsByIds,
} = productsAdapter.getSelectors((state: RootState) => state.products);

// state apiStatus loading statuses and error selectors
export const selectApiStatus = (state: RootState) => state.products.apiStatus;

