import React, {useContext} from 'react'
import store from "../../store/products.json";
import ProductItem from "../ProductItem/ProductItem";
import styles from './Products.module.scss'
import {CardContext} from "../../provider/context/CardContext";
import {ProductContext} from "../../provider/context/ProductContext";

export const Products = () => {
    const [products, setProducts]=useContext(ProductContext)


    return (
        <section className={`${styles.wrapper} wrapper`}>
            <h2 className={`${styles.title} content`}>Товары</h2>
            <div className={`${styles.content} content`}>
                {products.map(item =>
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
