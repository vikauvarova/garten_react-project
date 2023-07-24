import axios from "axios"

export const getDiscount = (phone) => {
    return async (dispatch) => {
        try {
          await axios.post("http://localhost:3333/sale/send", phone);
          dispatch({
            type: "GET_SALE_SUCCESS",
            payload: {...phone},
          });
        } catch (err) {
          dispatch({ type: "GET_SALE_ERROR", error: err.message });
        }
      };
}