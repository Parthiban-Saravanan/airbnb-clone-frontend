import axios from 'axios';

export const loginUser = (email, password) => async dispatch => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data.message });
  }
};
