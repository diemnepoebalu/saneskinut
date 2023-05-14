import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import CardProvider from "./provider/UI/CardProvider";
import ProductProvider from "./provider/UI/ProductProvider";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ReactNotifications />
            <ProductProvider>
              <CardProvider>
                  <App/>
               </CardProvider>
            </ProductProvider>
    </BrowserRouter>
);


