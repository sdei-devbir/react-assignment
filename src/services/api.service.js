import axios from "axios";

export default {
    getCategories: async () => {
        return axios
        .get(
          `https://mean.stagingsdei.com:6047/category/pagination?perPage=5&page=1`
        )
        .then(response => {
            return {categories: response.data.data, error: null}
        })
        .catch(err => {
          return {categories: null, error: err}
        });     
    },

    categorySearch: async (keyword) => {    
        return axios
        .get(
          `https://mean.stagingsdei.com:6047/category/search?keyword=${keyword}`
        )
        .then(response => {
            return {categories: response.data, error: null}
        })
        .catch(err => {
          return {categories: null, error: err}
        });     
    },

    getMerchants: async (categoryId) => {    
      return axios
      .get(
        `https://mean.stagingsdei.com:6047/merchant/pagination?id=${categoryId}&perPage=10&page=1`
      )
      .then(response => {         
          return {merchants: response.data, error: null}
      })
      .catch(err => {
        return {merchants: null, error: err}
      });     
  }
}