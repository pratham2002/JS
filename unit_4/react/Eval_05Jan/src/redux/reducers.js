import { actions } from "./action";

const token = null;
const initState = {
  isAuth: token != null,
  token: token
};
function reducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      };
    }
    case actions.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: false,
        token: action.payload.token
      };
    }
    default:
      return state;
  }
}

export default reducer;
