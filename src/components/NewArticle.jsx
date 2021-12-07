import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router";
import {postArticle} from '../utils/api'

function NewArticle(props) {
  let initialState = {
    title: props.url==='/newArticle'?"":props.article.title,
    content: props.url==='/newArticle'?"":props.article.content,
    company: props.url==='/newArticle'?null:props.article.company
  };
  const history = useHistory();
  const [state, setState] = useState(initialState);
  const handlePost=()=>{
    const {user} = props
    postArticle(props.dispatch,state,user.author.id,history)
  }
  return (
    <div className="container d-flex flex-column">
      <div className="input-group mt-1" >
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Title"
          value={state.title}
          style={{ fontWeight: "bold", fontSize: 25 }}
          onChange={({nativeEvent:{target:{value}}})=>setState({...state,title:value})}
        />
      </div>
      <div className="input-group mt-1">
        <textarea
          className="form-control mt-3"
          value={state.content}
          aria-label="With textarea"
          style={{ minHeight: "450px", resize: "none" }}
          placeholder="Write your thoughts here....."
          onChange={({nativeEvent:{target:{value}}})=>setState({...state,content:value})}
        ></textarea>
      </div>
      <button className="btn btn-outline-dark align-self-end mt-1" onClick={handlePost} >Post</button>
    </div>
  );
}

function mapStateToProps({currentArticle,authedUser},{match}){
return{
    article:currentArticle,
    user:authedUser.user,
    url:match.url
}
}

export default withRouter(connect(mapStateToProps)(NewArticle));
