import createSlice from "../../core/createSlice";

let cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  listCart: cart?.listCart || [],
  num: cart?.num || 0,
  amount: cart?.amount || 0,
  shipping: { name: "standard", value: 30000 },
};

function returnCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
}

let { reducer, TYPE, action } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: function (state, action) {
      let { listCart, amount } = state;
      let product = JSON.parse(JSON.stringify(action.payload));

      // let f = listCart.findIndex((e) => e._id === action.payload._id);
      let f = listCart.findIndex((e) => e._id === product._id);

      if (f !== -1) {
        listCart[f].cartNum++;
      } else {
        product.cartNum = 1;
        listCart.push(product);
      }

      let productPriceNum = product.price * 1;
      amount = amount + productPriceNum;

      return returnCart({
        ...state,
        listCart: listCart,
        num: state.num + 1,
        amount: amount,
      });
    },
    remove: function (state, action) {
      let { listCart, amount } = state;
      let product = action.payload;

      // find Index của sản phẩm removes
      let f = listCart.findIndex((e) => e._id === product._id);
      let cartNum = listCart[f].cartNum;
      let newAmout = amount - listCart[f].price * cartNum;
      if (f !== -1) {
        listCart.splice(f, 1);
      }

      if (isNaN(amount)) {
        amount = 0;
      }

      return returnCart({
        ...state,
        num: state.num - cartNum,
        listCart: listCart,
        amount: newAmout,
      });
    },
    changeCartNum: function (state, action) {
      let { listCart, num, amount } = state;
      let value = JSON.parse(JSON.stringify(action.payload.value));
      let f = listCart.findIndex((e) => e._id === action.payload._id);

      if (f !== -1) {
        listCart[f].cartNum = listCart[f].cartNum + value;
        num = num + value;
        amount = amount + listCart[f].price * value;
        if (listCart[f].cartNum === 0) {
          listCart.splice(f, 1);
        }
      }

      return returnCart({ ...state, listCart, num: num, amount: amount });
    },

    updateShipping: function (state, action) {
      return returnCart({ ...state, shipping: action.payload });
    },
    clearCart: function (state, action) {
      return returnCart({
        listCart: [],
        num: 0,
        amount: 0,
        shipping: { name: "standard", value: 30000 },
      });
    },
  },
});

export default reducer;

export const cart_addToCart = action.addToCart;
export const cart_removeCartItem = action.remove;
export const cart_changeCartNum = action.changeCartNum;
export const cart_updateShipping = action.updateShipping;
export const cart_clearCart = action.clearCart;
export const CART = TYPE;
