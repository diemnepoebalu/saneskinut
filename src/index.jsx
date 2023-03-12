import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import CardProvider from "./provider/UI/CardProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <CardProvider>
            <App/>
        </CardProvider>
    </BrowserRouter>
);


