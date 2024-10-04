
import axios from 'axios';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/users');
  dispatch({ type: 'FETCH_USERS', payload: res.data });
};
