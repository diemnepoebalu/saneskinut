export const checkProductById = (items, id) => {
    return items.some(item => item.id == id)
}

export const getProductIndexById = (items, id) => {
    return items.findIndex(item => item.id == id)
}

export const removeItemByIndex = (items, index) => {
    return items.filter((_, i) => i != index)
}

export const getProductDataById = (items, id) => {
    return items.find(item => item.id === id)
}

export const getPriceValue = (items, store) => {
    let value = 0

    items.forEach((item) => {
        const product = store.find((product) => product.id == item.id)
        value += parseInt(product.price) * item.count
    })
    return value
}