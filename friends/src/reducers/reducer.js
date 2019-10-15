import {
   FETCH_FRIENDS_START,
   FETCH_FRIENDS_SUCCESS,
   FETCH_FRIENDS_FAILURE,
   LOGIN_SUCCESS,
   LOGIN_FETCHING,
   LOGIN_FAILURE
} from '../actions/index';

const initialState = {
   fetchingFriends: false,
   friend: [],
   loggingIn: false,
   isFetching: false,
   error: null
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_FRIENDS_START:
         return {
            ...state,
            fetchingFriends: true,
            error: ''
         };
      case FETCH_FRIENDS_SUCCESS:
         return {
            ...state,
            isFetching: false,
            friend: action.payload,
            error: ''
         };
      case FETCH_FRIENDS_FAILURE:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         };
      case LOGIN_FETCHING:
         return {
            ...state,
            loggingIn: false,
            isFetching: true
         };
      case LOGIN_SUCCESS:
         return {
            ...state,
            loggingIn: true,
            isFetching: false
         };
      case LOGIN_FAILURE:
         return {
            ...state,
            loggingIn: false,
            isFetching: false,
            error: 'Error Log in failed'
         };
      default:
         return state;
   } //close switch
}; //close reducer
