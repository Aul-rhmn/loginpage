export const loginUser = (token) => (dispatch) => {
    dispatch({ type: 'LOGIN_SUCCESS', payload: token });
  };
  