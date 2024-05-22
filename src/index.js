import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouteProvider, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Provider } from 'react-redux';
import store from './store';
import CartScreen from './screens/cartScreen';

const router= createBrowserRouter(
  createRoutesFromElements(
    
      <Route path="/" element={<App />} >
        <Route index={true} path="/" element={<HomeScreen />} />
        <Route index={false} path="/product/:id" element={<ProductScreen />} />
        <Route index={false} path="/cart" element={<CartScreen />} />
      </Route>
      
    
  )

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>      
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
