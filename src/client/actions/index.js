import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
  const endpoint = 'https://react-ssr-api.herokuapp.com/users';
  const payload = await axios.get(endpoint);
  dispatch({ type: FETCH_USERS, payload });
}
