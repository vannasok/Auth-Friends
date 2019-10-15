import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FETCHING = 'LOGIN_FETCHING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginSuccess = props => dispatch => {
   dispatch({ type: LOGIN_FETCHING });
   return axios
      .get('http://localhost:5000/api/login', props)
      .then(res => {
         console.log('res :', res);
         localStorage.setItem('token', res.data.payload);
         dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.payload
         });
      }) //then
      .catch(err => {
         dispatch({
            type: LOGIN_FAILURE,
            payload: err
         });
      }); //catch
};

export const getFriend = () => dispatch => {
   dispatch({ type: FETCH_FRIENDS_START });

   axios
      .get(`http://localhost:5000/api/friends`, {
         headers: { authorization: localStorage.getItem('token') }
      })
      .then(res => {
         console.log(res);
         dispatch({
            type: FETCH_FRIENDS_SUCCESS,
            payload: res.data
         });
      }) //then
      .catch(err => {
         dispatch({
            type: FETCH_FRIENDS_FAILURE,
            payload: err
         });
      }); //catch
};
