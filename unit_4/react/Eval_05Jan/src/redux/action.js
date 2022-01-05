export const actions = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS"
};

export const loginSuccess = (token) => {
  return {
    type: actions.LOGIN_SUCCESS,
    payload: {
      token: token
    }
  };
};

export const logoutSuccess = () => {
  return {
    type: actions.LOGOUT_SUCCESS,
    payload: {
      token: "NA"
    }
  };
};
