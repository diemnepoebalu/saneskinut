import React from 'react'
import store from "../store/products.json";
import ProductItem from "./ProductItem/ProductItem";

export const Products = () => {

    return (
        <div className="preview-container">
            <h2 className='products__header'>
                Товары
            </h2>
            <div className="parent">
                {store.map(item =>
                    <ProductItem
                        price={item.price}
                        genderType={item.types}
                        category={item.category}
                        title={item.title}
                        image={item.image}
                        id={item.id}
                        key={item.id}
                    />
                )}
            </div>
        </div>
    )
}
