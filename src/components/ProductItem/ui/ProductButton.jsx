import React, {useContext} from 'react';
import {useCard} from "../../../provider/hooks/useCard";
import styles from './ProductButton.module.scss'
import { Store } from 'react-notifications-component';

const ProductButton = ({id}) => {
    const {cardData, addItem} = useCard()
    
    const cardPush = () => {
        Store.addNotification({
            title: "Успешно!",
            message: "Кеды добавлены в корзину...",
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          addItem(id) } 

    return (
        <button className={styles.button} onClick={() => cardPush()}>
            В корзину
        </button>
    );
};

export default ProductButton;
