import React, {useContext} from 'react';
import {useCard} from "../../../provider/hooks/useCard";
import styles from './ProducButton.module.scss'

const ProductButton = ({id}) => {
    const {cardData, addItem} = useCard()
    console.log(cardData)
    return (
        <button className={styles.button} onClick={() => {
            addItem(id)
        }}>
            TO CART
        </button>
    );
};

export default ProductButton;
