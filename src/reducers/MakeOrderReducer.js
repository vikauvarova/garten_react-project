const initialState = {
    newOrder: [],
    error: null,
    status: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ORDER_SUCCESS":
            const updatedOrder = [...state.newOrder, action.payload.order];
            return { ...state, newOrder: updatedOrder, status: action.payload.status };
        case "GET_ORDER_ERROR":
            return { ...state, error: action.error };
        default: 
            return state; 
    }
}


export default orderReducer;