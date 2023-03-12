export const checkProductById = (items, id) => {
    return items.some(item => item.id == id)

}

export const getProductIndexById=(items,id)=>{
    return items.findIndex(item=>item.id==id)
}