import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//Global App styles
import GlobalStyles from './globalStyles';
// Components
import HomePage from './pages/home/HomePage';
import SingleProduct from './pages/product/SingleProduct';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProductCategory from "./pages/category/ProductCategory";
import CartPage from "./pages/cart/CartPage";

const App = () => {

  const user = true;


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={
            <Suspense fallback={<h1>"I'm loading category"</h1>}>
              <ProductCategory />
            </Suspense>
          } />
          <Route path="/product/:id" element={
            <Suspense fallback={<h1>"I'm loading single product"</h1>}>
              <SingleProduct />
            </Suspense>
          } />
          <Route path="/cart" element={
            <Suspense fallback={<h1>"I'm loading cart"</h1>}>
              <CartPage />
            </Suspense>
          } />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/redirect"
            element={user ? <Navigate to="/login" /> : <Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/redirect"
            element={user ? <Navigate to="/register" /> : <Register />}
          />
        </Routes>
      </Router>
      <GlobalStyles />


    </div>
  )
};

export default App;
