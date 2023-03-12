import React from 'react';
import ProductButton from "./ui/ProductButton";
import {useCard} from "../../provider/hooks/useCard";
import styles from './ProductItem.module.scss'
import {Link} from "react-router-dom";

const ProductItem = ({price, title, genderType, category, image, id}) => {
    const {cardData, deleteItem} = useCard()
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Link to={`/product/${id}`}>
                    <img src={image} alt="img"/>
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.feature}>
                    <Link to={`/product/${id}`}>
                        <span>{title}</span>
                    </Link>
                </div>
                <div className={styles.feature}>
                    {price}
                </div>
                <div className={styles.action}>
                    <ProductButton id={id}/>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
