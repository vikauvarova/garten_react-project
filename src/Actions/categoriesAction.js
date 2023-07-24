import axios from "axios";

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3333/categories/all");
            dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({ type: "FETCH_CATEGORIES_ERROR", error: error.message });
        }
    };
}

