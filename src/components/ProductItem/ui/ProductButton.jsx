import React, {useContext} from 'react';
import {useCard} from "../../../provider/hooks/useCard";
import styles from './ProductButton.module.scss'

const ProductButton = ({id}) => {
    const {cardData, addItem} = useCard()

    return (
        <button className={styles.button} onClick={() => addItem(id)}>
            В корзину
        </button>
    );
};

export default ProductButton;
