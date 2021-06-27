import createSlice from "../../core/createSlice";

const initialState = {
  categories: [],
  productList: {},
  isLoading: true,
  productDetail: [],
  productList_TopRate: [],
};

let { reducer, TYPE, action } = createSlice({
  name: "shop",
  initialState,
  reducers: {
    categories: function (state, action) {
      return { ...state, categories: action.payload };
    },
    productList: function (state, action) {
      return { ...state, productList: action.payload, isLoading: false };
    },
    productList_nrpage: function (state, action) {
      return { ...state, productList: action.payload, isLoading: false };
    },
    set_isLoading: function (state, action) {
      return { ...state, isLoading: true };
    },
    productDetail: function (state, action) {
      return { ...state, productDetail: action.payload, isLoading: false };
    },
    category_productList: function (state, action) {
      return { ...state, productList: action.payload, isLoading: false };
    },
    productList_TopRate: function (state, action) {
      return {
        ...state,
        productList_TopRate: action.payload,
        isLoading: false,
      };
    },
  },
});

export default reducer;

export const shop_categories = action.categories;
export const shop_productList = action.productList;
export const shop_productList_nrpage = action.productList_nrpage;
export const shop_set_isLoading = action.set_isLoading;
export const shop_productDetail = action.productDetail;
export const shop_category_productList = action.category_productList;
export const shop_productList_TopRate = action.productList_TopRate;
