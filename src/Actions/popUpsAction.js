export const changeShowingDiscountTrue = () => {
    return {
        type: "CHANGE_SHOW_DISCOUNT_SUCCESS",
        payload: true,
    }
}

export const changeShowingDiscountFalse = () => {
    return {
        type: "CHANGE_SHOW_DISCOUNT_CLOSE",
        payload: false,
    }
}

export const changeShowingSuccessAddTrue = () => {
    return {
        type: "ADD_PRODUCT_SUCCESS",
        payload: true,
    }
}

export const changeShowingSuccessAddFalse = () => {
    return {
        type: "ADD_PRODUCT_CLOSE",
        payload: false,
    }
}

export const orderSuccess = () => {
    return {
        type: "ORDER_SUCCESS",
        payload: true,
    }
}

export const orderSuccessClose = () => {
    return {
        type: "ORDER_SUCCESS_CLOSE",
        payload: false,
    }
}