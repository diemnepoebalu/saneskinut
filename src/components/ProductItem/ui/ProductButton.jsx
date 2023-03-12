import React, {useContext} from 'react';
import {useCard} from "../../../provider/hooks/useCard";

const ProductButton = ({id}) => {
     const {cardData, addItem} = useCard()
     console.log(cardData)
    return (
        <div className="cart-btn" onClick={()=>{addItem(id)}} >
            TO CART
        </div>
    );
};

export default ProductButton;