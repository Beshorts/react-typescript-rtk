import { configureStore } from "@reduxjs/toolkit";

// using redux-persist for persisting state across refresh pages
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from "redux-persist";
  
import { persistedReducer } from "./rootReducer";


export const store = configureStore({
    // persistedState
    reducer: persistedReducer,
    // avoid non-serializability check for redux-persist
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {products: ProductsState, carts: CartsState, Auth: authState}
export type AppDispatch = typeof store.dispatch;
