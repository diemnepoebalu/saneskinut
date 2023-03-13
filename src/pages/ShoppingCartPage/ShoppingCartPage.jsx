import React from 'react';
import styles from './ShoppingCartPage.module.scss'
import PriceInfo from "../../components/ShoppingCart/PriceInfo/PriceInfo";
import {useCard} from "../../provider/hooks/useCard";
import CartItem from "../../components/ShoppingCart/CartItem/CartItem";

const ShoppingCartPage = () => {
    const {cardData} = useCard()

    return (
        <section className={`${styles.wrapper} wrapper`}>
            <div className={`${styles.content} content`}>
                <div>
                    {cardData.map(data => <CartItem
                        data={data}
                        key={data.id}
                    />)}
                </div>
                <PriceInfo/>
            </div>
        </section>
    );
};

export default ShoppingCartPage;