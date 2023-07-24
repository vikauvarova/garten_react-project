const inisialState = {
    // filtered: [],
    newProducts: [],
    filterPriceFrom: "",
    filterPriceTo: "",
    showDiscount: false,
    sortType: "", 
}

export const filterReducer = (state = inisialState, action) => {

    switch (action.type) {
        case "SET_PRICE_FROM":
            const priceFrom = action.payload;
            return {...state, filterPriceFrom: priceFrom}
        case "SET_PRICE_TO":
            const priceTo = action.payload;
            return {...state, filterPriceTo: priceTo};
        case "SET_IS_SHOW":
            const isShow = action.payload;
            return {...state, showDiscount: isShow};
        case "SET_SORT_TYPE":
            const type = action.payload;
            return {...state, sortType: type}
        // case "FILTER_PRICE_FROM": 
        //     let filtered = action.payload;
        //     filtered = filtered.filter((product) => product.price >= Number(state.filterPriceFrom));
        //     return {...state, newProducts: filtered};
        default:
            return state;
    }
}