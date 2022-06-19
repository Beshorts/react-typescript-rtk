import { useState, useEffect, useCallback } from 'react';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../app/store'

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SliderItemProps } from '../API/localData';
import { selectAllProducts, selectApiStatus, selectProductById } from '../features/products/productsSlice';
import { ProductItemProps } from '../components/products/ProductPreview';
import { addFavorites, removeFavorite } from '../features/favorites/favoritesSilce';
import { addToCart, cartSelector, removeFromCart } from '../features/cart/cartSlice';


// API CALL
axios.defaults.baseURL = 'https://fakestoreapi.com';

export const useAxios = <T>(axiosParams: AxiosRequestConfig) => {

  const [response, setResponse] = useState<AxiosResponse<T>>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      result.status === 200 ? setResponse(result) : setError(true);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams]); // execute once only

  return {
    response,
    error,
    loading,
  };
};


// custom hook to get LOCAL DATA, in a real app a CMS or API will be called with axios asynchronously
export const useGetLocalData = <T>(param: T) => {

  const [response, setResponse] = useState<T>(param);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    try {
      const result = param;
      setLoading(false);
      setResponse(result);
    } catch {
      setError(true);
    }
    setLoading(false);
  },[param]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // execute once only

  return {
    response,
    error,
    loading
  }
};

// not reusable custom hook to handle slide directions through arrows click
export const useHandleArrowClick = (param1: SliderItemProps[], param2: number) => {

  const [slideIndex, setSlideIndex] = useState(param2);

  // get elements amount, minus 1 to get back to first/last one when click first/last elem 
  const totalElements = param1 ? param1.length - 1 : 0;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    const value = event.currentTarget.value;

    if (value === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : totalElements);
    } else if (value === "right") {
      setSlideIndex(slideIndex < totalElements ? slideIndex + 1 : 0);
    }
  };
  return {
    slideIndex,
    handleClick,
  }
};

// hook that holds all form state in one big chunk
export const useFormFields = <T>(params: T) => {

  const [formFields, setFormFields] = useState<T>(params);

  const createChangeHandler = (key: keyof T) => (

    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.currentTarget.value;
    setFormFields((prev: T) => ({ ...prev, [key]: value }));
  };
  return {
    formFields,
    createChangeHandler
  };
};

// REDUX

// typed versions of useDispatch and useSelector hooks to avoid manualy imports of RooState and AppDispatch.
// check RDK docs => https://redux-toolkit.js.org/tutorials/typescript
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// get ALL PRODUCTS and render them depend on status and error 


export const useAllProductsWithStatuses = () => {

  const getState = useAppSelector(selectAllProducts);
  const getStatus = useAppSelector(selectApiStatus);
  const { status, error } = getStatus;

  const [state, setState] = useState<ProductItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean | string | undefined>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if ((status === 0) || (status === 1)) {
      setIsLoading(true);
    } else if ((status === 2) || (error && error.message)) {
      setIsLoading(false)
      setIsError(true);
    } else if (status === 3) {
      setIsError(false);
      setIsLoading(false);
      setIsSuccess(true);
      setState(getState);
    }

  }, [status, getState, error]);

  return {
    state,
    isLoading,
    isError,
    isSuccess
  }

}

// get Single Product

export const useIdProductWithStatuses = (param: string) => {

  const singleProduct = useSelector((state: RootState) => selectProductById(state, param));
  const getStatus = useAppSelector(selectApiStatus);


  const { status, error } = getStatus;

  const [getState, setGetState] = useState<ProductItemProps>({ category: '', title: '', image: '', id: 0, description: '', rating: { rate: 0, count: 0 }, price: 0 });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean | string | undefined>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if ((status === 0) || (status === 1)) {
      setIsLoading(true);
    } else if ((status === 2) || (error && error.message)) {
      setIsLoading(false)
      setIsError(true);
    } else if ((status === 3) && singleProduct) {
      setIsError(false);
      setIsLoading(false);
      setIsSuccess(true);
      setGetState(singleProduct);
    }
  }, [status, error, singleProduct]);

  return {
    getState,
    isLoading,
    isError,
    isSuccess
  }
};


export const useAddRemoveFavorite = (value: ProductItemProps['id']) => {
  const dispatch = useAppDispatch();

  // get Favorites state
  const favoritesState = useSelector((state: RootState) => state.favorites.favoritesProducts);

  // get current element based on passed value
  const getCurrentItem = favoritesState.find(elem => elem === value);
  const isCurrentItem = getCurrentItem ? getCurrentItem : 0;
  // initialize hooks state to manage UI logic
  const [favoriteItem, setFavoriteItem] = useState<ProductItemProps['id']>(isCurrentItem);

  const favorite = (item: ProductItemProps) => {
    setFavoriteItem(favoriteItem);
    if (getCurrentItem) {
      dispatch(removeFavorite(item.id));
      setFavoriteItem(favoriteItem);
    } else {
      dispatch(addFavorites(item.id));
    }
  };

  return {
    isCurrentItem,
    favorite
  }
};

export const useAddRemoveCartItem = (value: number) => {

  const dispatch = useAppDispatch();

  // get states
  const cartItems = useAppSelector(cartSelector);

  // get current elem based on passed value
  const getCurrentCartItem = cartItems.find(elem => elem.id === value);
  const isCurrentCartItem = getCurrentCartItem ? getCurrentCartItem : 0;

  const [cartItem, setCartItem] = useState(isCurrentCartItem || false);

  const cart = (item: ProductItemProps) => {
    setCartItem(cartItem);
    if (isCurrentCartItem) {
      dispatch(removeFromCart(item));
      setCartItem(!cartItem);
    } else  {
      dispatch(addToCart(item));
    }
  };

  return {
    isCurrentCartItem,
    cart
  }

}