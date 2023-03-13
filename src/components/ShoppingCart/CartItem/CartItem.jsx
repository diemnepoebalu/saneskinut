import React from 'react';
import styles from './CartItem.module.scss'
import {getProductDataById} from "../../../helpers/products/products";
import store from '../../../store/products.json'
import CartButtons from "../CartButtons/CartButtons";
import {useCard} from "../../../provider/hooks/useCard";

const CartItem = ({data}) => {
    const productCart = getProductDataById(store, data.id)


    return (
        <div className={styles.container}>
            <div className={styles.img_block}>
                <img
                    src={productCart.image} alt=""/>
            </div>
            <div className={styles.info}>
                <div>Название:{productCart.title} <br/> <br/></div>
                <div>Тип:{productCart.types} <br/> <br/></div>
                <div>Цена:{productCart.price} руб</div>
            </div>
            <CartButtons data={data}/>
        </div>
    );
};

export default CartItem;