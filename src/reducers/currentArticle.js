import {
  SET_CURRENT_ARTICLE,
  REMOVE_CURRENT_ARTICLE
} from "../actions/articles";

let intialState={
  title:"",
  content:"",
  company:null,
  author:null
}

export default function currentArticle(state = intialState, action) {
  switch (action.type) {
    case SET_CURRENT_ARTICLE:
      return {
        ...action.article
      }
    case REMOVE_CURRENT_ARTICLE:
      return intialState;
    default:
      return state;
  }
}
