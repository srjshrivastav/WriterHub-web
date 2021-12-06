import { combineReducers } from "redux";
import authedUser from "./authUser";
import currentArticle from "./currentArticle";
import alertMessage from "./alertMessage";
import articles from "./articles";
import loading from "./loading";

export default combineReducers({
  authedUser,
  currentArticle,
  articles,
  alertMessage,
  loading
});
