import apis from "../../services/api.service";

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";

const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

// fetch categories
export const fetchCategories = categories => {
  return async dispatch => {
    const { categories, err } = await apis.getCategories();
    if (!err && categories.data && categories.data.length) {
      dispatch(fetchCategoriesSuccess(categories.data));
    }
  };
};

export default fetchCategories;
