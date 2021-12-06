export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const UNSET_AUTHED_USER = "UNSET_AUTHED_USER";
export const SET_AUTHOR = "SET_AUTHOR"

export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

export function setAuthor(author) {
  return {
    type: SET_AUTHOR,
    author,
  };
}

export function unsetAuthedUser() {
  return {
    type: UNSET_AUTHED_USER,
  };
}