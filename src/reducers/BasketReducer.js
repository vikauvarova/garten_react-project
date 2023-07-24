const initialState = {
  products: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  error: null,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
      case "FETCH_ALL_PRODUCTS_SUCCESS":
        return {...state, products: action.payload,};
      case "FETCH_ALL_PRODUCTS_ERROR": {
        return {
          ...state,
          error: action.error,
      };
      }
      case "ADD_TO_BASKET" : 
        const updatedBasket = [...state.basket];
        const productIndex = updatedBasket.findIndex((product) => product.id === action.payload.id);
            if(productIndex === -1) {
              updatedBasket.push(action.payload)
            } else {
              updatedBasket[productIndex].quantity += 1;
            }
            localStorage.setItem("basket", JSON.stringify(updatedBasket))
            return {...state, basket: updatedBasket};
      case "DELETE_FROM_BASKET":
        const filteredBasket = state.basket.filter((product) => product.id !== action.payload);
        localStorage.setItem("basket", JSON.stringify(filteredBasket));
        return {...state, basket: filteredBasket};
      case "CREAR_BASKET":
        const clearBasket = JSON.parse(localStorage.getItem("basket")) || [];
            return {...state, basket: clearBasket}
      case "UPTATE_QUANTITY":
        const updateBasket = state.basket.map((product) => {
          if(product.id === action.payload.id){
            return {...product, quantity: parseInt(action.payload.newQuantity)};
          }
            return product;
          });
          localStorage.setItem("basket", JSON.stringify(updateBasket));
          return {...state, basket: updateBasket};
      default:
          return state;
  }
} 

export default basketReducer;