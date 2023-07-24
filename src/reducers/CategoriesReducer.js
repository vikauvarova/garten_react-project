const inisialState = {
    categories: [],
    category: [],
    loading: null,
    error: null,
}

const categoryReducer = (state = inisialState, action) => {
    switch(action.type) {
        case "FETCH_CATEGORIES_SUCCESS":
            return {...state, categories: action.payload,};
        case "FETCH_CATEGORY_SUCCESS":
            return {...state, category: action.payload,};
        case "FETCH_CATEGORIES_LOADING":
            return {
                ...state,
                loading: action.payload,
            }
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

export default categoryReducer;