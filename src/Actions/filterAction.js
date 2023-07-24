export const filterPriceFrom = (num) => {
    return {
        type: "SET_PRICE_FROM",
        payload: num
    }
}

export const filterPriceTo = (num) => {
    return {
        type: "SET_PRICE_TO",
        payload: num,
    }
}

export const filterDiscount = (isShow) => {
    return {
        type: "SET_IS_SHOW",
        payload: isShow
    }
}

export const filterSortType = (type) => {
    return {
        type: "SET_SORT_TYPE",
        payload: type,
    }
}

// export const filterProductsPriceFrom = (products) => {
//     return {
//         type: "FILTER_PRICE_FROM",
//         payload: products
//     }
// }