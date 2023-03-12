import React, {useState} from 'react';
import {CardContext} from "../context/CardContext";

const CardProvider = ({children}) => {
    const [cardData, setCardData] = useState([])

    const defaultProps = () => {
        return{
            cardData,
            setCardData
        }
    }
    return (
        <CardContext.Provider value={defaultProps()}>
            {children}
        </CardContext.Provider>
    );
};

export default CardProvider;