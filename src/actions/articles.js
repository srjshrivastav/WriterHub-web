export const ADD_ARTICLE = "ADD_ARTICLES";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const SET_CURRENT_ARTICLE = "SET_CURRENT_ARTICLE";
export const REMOVE_CURRENT_ARTICLE = "REMOVE_CURRENT_ARTICLE";

export function addArticle(articles) {
  return {
    type: ADD_ARTICLE,
    articles,
  };
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    articleId
  };
}
