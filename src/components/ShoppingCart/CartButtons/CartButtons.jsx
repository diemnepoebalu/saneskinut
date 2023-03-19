import React from 'react';
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
import styles from './CartButtons.module.scss'
import {useCard} from "../../../provider/hooks/useCard";

const CartButtons = ({data}) => {
    const {addItem,deleteItem} = useCard()

    return (
        <div className={styles.container}>
            <AiFillPlusCircle
                onClick={()=>{addItem(data.id)}}
                style={{width: '20px'}}/>
            <div className={styles.count}>количество:{data.count}</div>
            <AiFillMinusCircle
                onClick={()=>{deleteItem(data.id)}}
                style={{width: '20px'}}/>
        </div>
    );
};

export default CartButtons;