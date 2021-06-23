import authApi from "../../api/authApi";
import createSlice from "../../core/createSlice";

let user = JSON.parse(localStorage.getItem("auth"));
let token = JSON.parse(localStorage.getItem("token"));

let initialState = {
  user: user || {},
  error: "",
  isLogged: token !== null ? true : false,
};

export function login(data) {
  return (dispatch, state) => {
    authApi.login(data).then((res) => {
      console.log(res);
      if (data.error) {
        dispatch(action.error(res.error));
      } else {
        dispatch(action.login(res.data));
      }
    });
  };
}
export function register(data) {
  return (dispatch, state) => {
    authApi.register(data).then((res) => {
      console.log(res);
      if (data.error) {
        dispatch(action.error(res.error));
      } else {
        dispatch(action.register(res.data));
      }
    });
  };
}

let { TYPE, action, reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: function (state, action) {
      localStorage.setItem("auth", JSON.stringify(action.payload));
      localStorage.setItem("token", JSON.stringify(action.payload.token));

      return { ...state, user: action.payload, isLogged: true };
    },
    logout: function (state, action) {
      console.log("b");
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
      return {
        ...state,
        isLogged: false,
        user: {},
      };
    },
    register: function (state, action) {
      let user = action.payload;
      let token = action.payload.token;

      localStorage.setItem("auth", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));

      return { ...state, user: action.payload, isLogged: true };
    },
    error: function (state, action) {
      return { ...state, error: action.payload };
    },
  },
});

export default reducer;

export const AUTH = TYPE;
export const auth_login = action.login;
export const auth_logout = action.logout;
