import React, {useState} from 'react';
import {ProductContext} from "../context/ProductContext";
import store from '../../store/products.json'

const ProductProvider = ({children}) => {
    const initProducts=JSON.parse(JSON.stringify(store))
    const [products, setProducts] = useState(initProducts)

    const defaultProps = () => {
        return[
            products,
            setProducts
        ]
    }
    return (
        <ProductContext.Provider value={defaultProps()}>
            {children}
        </ProductContext.Provider >
    );
};

export default ProductProvider;