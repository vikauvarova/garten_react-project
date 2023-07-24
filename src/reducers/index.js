import {combineReducers} from "redux";
import categoryReducer from "./CategoriesReducer";
import { popUpsReducer } from "./PopUpsReducers";
import discountReducer from "./SaleSendReducer";
import productsReducer from "./ProductsReducer";
import basketReducer from "./BasketReducer";
import singleCategoryReducer from "./SingleCategoryReducer";
import orderReducer from "./MakeOrderReducer";
import { filterReducer } from "./FilterReducer";


const rootReducer = combineReducers({
    categories: categoryReducer,
    popUps: popUpsReducer,
    discount: discountReducer,
    products: productsReducer,
    basket: basketReducer,
    singleCategory: singleCategoryReducer,
    filter: filterReducer,
    order: orderReducer,
})

export default rootReducer;