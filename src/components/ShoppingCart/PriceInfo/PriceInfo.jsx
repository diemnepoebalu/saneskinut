import React from 'react';
import styles from './PriceInfo.module.scss'
import {useCard} from "../../../provider/hooks/useCard";
import {getPriceValue, getProductDataById} from "../../../helpers/products/products";
import store from "../../../store/products.json";

const PriceInfo = () => {
    const {cardData} = useCard()
    const countPrice=getPriceValue(cardData,store)


    return (
        <div className={styles.container}>
            Итого: <br/>
            {countPrice}
        </div>
    );
};

export default PriceInfo;