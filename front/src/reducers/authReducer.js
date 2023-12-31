import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  currentUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return state;
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.accessToken);
      return {
        ...state,
        token: action.payload.accessToken,
        currentUser: { email: action.payload.user.email },
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        currentUser: null,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
