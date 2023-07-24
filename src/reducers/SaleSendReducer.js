const initialState = {
    newDiscount: [],
    error: null
}

const discountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_SALE_SUCCESS":
            const updatedDiscounts = [...state.newDiscount, action.payload];
            return { ...state, newDiscount: updatedDiscounts };
        case "GET_SALE_ERROR":
            return { ...state, error: action.error };
        default: 
            return state; 
    }
}

export default discountReducer;