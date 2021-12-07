import {
  ADD_ARTICLE,
  DELETE_ARTICLE
} from "../actions/articles";

export default function articles(state = new Map(), action) {
  switch (action.type) {
    case ADD_ARTICLE:
      for(let index in action.articles){
        state={
          ...state,
          [action.articles[index].id]:{
            ...action.articles[index]
          }
        }
      }
      return state;
    case DELETE_ARTICLE:
      delete state[action.articleId]
      return state;
    default:
      return state;
  }
}
