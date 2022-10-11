export const setProduct = (item) => {
    return {
        type: "SET_PRODUCT",
        payload:item,
    }
}
export const selectedProduct = (item) => {
    return {
        type: "SELECTED_PRODUCT",
        payload:item,
    }
}
export const removeSelectedProduct = (item) => {
    return {
      type: "REMOVE_SELECTED_PRODUCT",
      payload: item,
    };
}