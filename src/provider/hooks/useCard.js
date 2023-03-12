import {useContext} from "react";
import {CardProvider} from "../UI/CardProvider";
import {checkProductById, getProductIndexById} from "../../helpers/helpers";
import {CardContext} from "../CardContext";


export const useCard = () => {
    const {cardData, setCardData} = useContext(CardContext)

    const addItem = (id) => {
        const haveInCard = checkProductById(cardData, id)

        if (!haveInCard) {
            setCardData([...cardData, {id: id, count: 1}])
        } else {
            let index = getProductIndexById(cardData, id)
            let copyProduct = [...cardData]

            copyProduct[index].count = copyProduct[index].count + 1
            setCardData(copyProduct)
        }
    }

    const deleteItem = (id) => {
        setCardData()
    }

    const clearCard = () => {
        setCardData()
    }

    return {
        cardData,
        addItem
    }

}