const inisialState = {
    getDiscountPopUp: false,
    addProductPopUp: false,
    orderSuccess: false,
}

export const popUpsReducer = (state = inisialState, action) => {
    switch (action.type){
        case "CHANGE_SHOW_DISCOUNT_SUCCESS":
                return {...state, getDiscountPopUp: action.payload};
            case "CHANGE_SHOW_DISCOUNT_CLOSE":
                return {...state, getDiscountPopUp: action.payload};
        case "ADD_PRODUCT_SUCCESS":
            return {...state, addProductPopUp: action.payload};
        case "ADD_PRODUCT_CLOSE":
            return {...state, addProductPopUp: action.payload};
        case "ORDER_SUCCESS":
            return {...state, orderSuccess: action.payload};
        case "ORDER_SUCCESS_CLOSE":
            return {...state, orderSuccess: action.payload};
        default:
            return state;
    }
}