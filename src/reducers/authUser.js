import { SET_AUTHED_USER, SET_AUTHOR, UNSET_AUTHED_USER } from "../actions/authUsers";

const initialState = {
  isAuthenticated:false,
  user:null
}

export default function authedUser(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        isAuthenticated:true,
        user:action.user
      };
    case SET_AUTHOR:
      return{
        ...state,
        user:{
          ...state.user,
          author:action.author
        }
      }
    case UNSET_AUTHED_USER:
      return {
        isAuthenticated:false,
        user:null
      };
    default:
      return state;
  }
}
