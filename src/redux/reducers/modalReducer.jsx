import createSlice from "../../core/createSlice";

let initialState = {};

let { TYPE, action, reducer } = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: function (state, action) {
      return { ...state };
    },
  },
});

export default reducer;

export const modal_openModal = action.openModal;
export const MODAL = TYPE;
