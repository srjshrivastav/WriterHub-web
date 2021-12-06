import {HOST,POST} from '../config/serverConfig'
import {setAuthedUser, setAuthor} from '../actions/authUsers'
import { setMessge } from '../actions/apiErrorAlert';
import { startLoading, stopLoading } from '../actions/loading';
import { addArticle } from '../actions/articles';

const baseUrl  = HOST+":"+POST

function getFormBody(credentials){
var formBody = [];
for (var property in credentials) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(credentials[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");
return formBody;
}


export function login(credentials,dispatch) {
  const requestBody = getFormBody(credentials);
  return fetch(baseUrl+"/auth/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
    },
    body:requestBody
  })
  .then(async (response)=>{
    console.log(response)
    if(response.status === 200){
      const body = await response.json()
      window.localStorage.setItem("writerHub_access_token",body.access_token);
      window.localStorage.setItem("writerHub_refresh_token",body.refresh_token);
      dispatch(setAuthedUser(body.user))
      return true
    }
    else if(response.status === 401){

    }
    else{

    }
  })
}

export function signup(credentials,dispatch) {
  fetch(baseUrl+"/auth/signup",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(credentials)
  })
  .then(async (response)=>{
    const body = await response.json();
    if(response.status === 201){
      dispatch(setMessge("Sucess! Your usernme is "+credentials.username,"SUCCESS"))
    }
    else{
      dispatch(setMessge(body.message,"ERROR"))
    }
  })
}


export function loadArticles(dispatch) {

  const access_token = window.localStorage.getItem("writerHub_access_token");
  return fetch(baseUrl+"/api/articles",{
    method:"GET",
    headers:{
      "Authorization":"Bearer "+access_token
    }
  })
  .then(async (response)=>{
    const body = await response.json();
    if(response.status === 200){
      dispatch(addArticle(body));
    }
    else{
      dispatch(setMessge(body.message,"ERROR"))
    }
  })
}

export function createAuthor(dispatch,author) {
  const access_token = window.localStorage.getItem("writerHub_access_token");
  fetch(baseUrl+"/api/author",{
    method:"POST",
    headers:{
      "Authorization":"Bearer "+access_token,
      "Content-Type":"application/json"
    },
    body:JSON.stringify(author)
  })
  .then(async (response)=>{
    const body = await response.json();
    if(response.status === 201){
      dispatch(setAuthor(body));
    }
    else{
      dispatch(setMessge(body.message,"ERROR"))
    }
  })
}


export function postArticle(dispatch,article,authorId,history) {
  const access_token = window.localStorage.getItem("writerHub_access_token");
  fetch(baseUrl+"/api/author/"+authorId+"/article",{
    method:"POST",
    headers:{
      "Authorization":"Bearer "+access_token,
      "Content-Type":"application/json"
    },
    body:JSON.stringify(article)
  })
  .then(async (response)=>{
    const body = await response.json();
    if(response.status === 201){
      dispatch(addArticle([body]));
      history.push("/myArticles")
    }
    else{
      dispatch(setMessge(body.message,"ERROR"))
    }
  })
}

export function fetchArticlesByAuthor(dispatch,authorId) {
  const access_token = window.localStorage.getItem("writerHub_access_token");
  return fetch(baseUrl+"/api/author/"+authorId+"/articles",{
    method:"GET",
    headers:{
      "Authorization":"Bearer "+access_token
    }
  })
  .then(async (response)=>{
    const body = await response.json();
    if(response.status === 200){
      return body;
    }
    else{
      dispatch(setMessge(body.message,"ERROR"))
    }
  })
}   