import axios from "axios"

export const sendOrder = (order) => {
    return async (dispatch) => {
        try {
          const response = await axios.post("http://localhost:3333/order/send", order);
          dispatch({
            type: "GET_ORDER_SUCCESS",
            payload: {order, status: response.status},
          });
        } catch (err) {
          dispatch({ type: "GET_ORDER_ERROR", error: err.message });
        }
      };
}