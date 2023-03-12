import {useContext} from "react";
import {CardProvider} from "../UI/CardProvider";
import {checkProductById, getProductIndexById, removeItemByIndex} from "../../helpers/helpers";
import {CardContext} from "../context/CardContext";


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
        let index = getProductIndexById(cardData, id)

        if (cardData[index].count <= 1) {
            let newCardData = removeItemByIndex(cardData, index)
            setCardData(newCardData)
        } else {
            let copyProduct = [...cardData]

            copyProduct[index].count = copyProduct[index].count - 1
            setCardData(copyProduct)
        }
    }

    const clearCard = (id) => {

    }

    return {
        cardData,
        addItem,
        deleteItem
    }

}