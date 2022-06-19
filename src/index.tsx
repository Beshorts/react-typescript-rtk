import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './app/store';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { fetchProducts } from './features/products/productsSlice';

store.dispatch(fetchProducts());


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <Provider store={store}>
    <PersistGate loading={<div>loading</div>} persistor={persistor} >
    <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
