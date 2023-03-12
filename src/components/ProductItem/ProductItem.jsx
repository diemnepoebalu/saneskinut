import React from 'react';
import ProductButton from "./ui/ProductButton";
import {useCard} from "../../provider/hooks/useCard";
import styles from './ProductItem.module.scss'

const ProductItem = ({price, title, genderType, category, image, id}) => {
    const {cardData, deleteItem} = useCard()
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={image} alt="img"/>
            </div>
            <div className={styles.info}>
                <div className={styles.feature}>Стоимость: <span>{price}$</span></div>
                <ProductButton id={id}/>
            </div>
        </div>
    );
};

export default ProductItem;
