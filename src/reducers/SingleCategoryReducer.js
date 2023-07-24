const inisialState = {
    category: [],
    products: [],
    error: null,
}

const singleCategoryReducer = (state = inisialState, action) => {
    switch(action.type) {
        case "FETCH_CATEGORY_SUCCESS":
            return {...state, category: action.payload,};
        case "FETCH_PRODUCTS_IN_CATEGORY_SUCCESS":
            return {...state, products: action.payload,};
        case "FETCH_CATEGORIES_ERROR": {
            return {
                ...state,
                error: action.error,
            };
        }
        default:
            return state;
    }
}

export default singleCategoryReducer;