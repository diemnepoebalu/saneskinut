import React from 'react'
import store from "../../store/products.json";
import ProductItem from "../ProductItem/ProductItem";
import styles from './Products.module.scss'

export const Products = () => {

    return (
        <section className={`${styles.wrapper} wrapper`}>
            <h2 className={`${styles.title} content`}>Товары</h2>
            <div className={`${styles.content} content`}>
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
        </section>
    )
}
