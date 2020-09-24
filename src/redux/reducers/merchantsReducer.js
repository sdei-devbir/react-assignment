import { FETCH_MERCHANTS_SUCCESS } from "../actions/merchantsActions";

const initState = {
  merchants: {}
};

const categoriesReducer = (state = initState, action) => {
  if (action.type === FETCH_MERCHANTS_SUCCESS) {
    let categoryMerchantData = {};

    categoryMerchantData[action.payload.categoryId] = action.payload.merchants;
    return {
      ...state,
      merchants: { ...state.merchants, ...categoryMerchantData }
    };
  }

  return state;
};

export default categoriesReducer;
