import React from "react";
import { useHistory } from "react-router";


export default function NoArticlePage(props){
    const {isAuthor} = props;
    const history = useHistory();
    return(
        <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-6 mt-5">
        <div className="card text-center mt-5">
          <h3 className="card-title">No one has posted any article yet!!</h3>
          <div className="card-body">
              {isAuthor &&  <button
              className="btn btn-outline-dark"
              onClick={() => history.push("/newArticle")}
            >
              Become first to post article..!
            </button>}
            {!isAuthor &&  <button
              className="btn btn-outline-dark"
              onClick={() => history.push("/authorForm")}
            >
              Become an Author now!
            </button>}
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}