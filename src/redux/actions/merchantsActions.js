import apis from "../../services/api.service";

export const FETCH_MERCHANTS_SUCCESS = "FETCH_MERCHANTS_SUCCESS";

const fetchMerchantsSuccess = (categoryId, merchants) => ({
  type: FETCH_MERCHANTS_SUCCESS,
  payload: { categoryId, merchants }
});

// fetch merchants
export const fetchMerchants = categoryId => {
  return async dispatch => {
    const { merchants, err } = await apis.getMerchants(categoryId);
    if (
      !err &&
      merchants.data &&
      merchants.data.data &&
      merchants.data.data.length
    ) {
      dispatch(fetchMerchantsSuccess(categoryId, merchants.data.data));
    }
  };
};

export default fetchMerchants;
