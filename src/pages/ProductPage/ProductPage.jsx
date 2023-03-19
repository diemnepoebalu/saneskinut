import React from 'react';
import {useParams} from "react-router-dom";
import store from "../../store/products.json";
import styles from './ProductPage.module.scss'

const ProductPage = () => {
    const {id} = useParams()

    const product = store.find(item => item.id == id)

    return (
        <section className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.content} content`}>
                <div className={styles.image}>
                    <img src={product.image} alt=""/>
                </div>
                <div className={styles.info}>
                    <p className={styles.price}>
                        {product.price}
                    </p>
                    <p className={styles.title}>
                        {product.title}
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <span>Пол</span> {product.types}
                        </li>
                        <li>
                            <span>Категория</span> {product.category}
                        </li>
                        <li>
                            <span>Высота</span> {product.height}
                        </li>
                        <li>
                            <span>Материал</span> {product.Material}
                        </li>
                        <li>
                            <span>Брэнд</span> {product.Brand}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
