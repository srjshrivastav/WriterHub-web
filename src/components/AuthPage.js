import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginBox from "./LoginBox";
import SignupBox from "./SignupBox";

function AuthPage(props){
    const path = window.location.pathname;
    const {url} = props;
    return (
        <div className="container mt-5">
          <div className="row row-content">
            <div className="col-12 col-sm-6 align-self-center">
              <p>
                <strong style={{fontSize:50}}>WriterHub</strong> is a project in which you can
                add your thoughts in the form of articles.An Articles that can
                convey your thoughts to the readers in such a way that you can add
                some good in their life......!
              </p>
            </div>
            <div className="col-12 col-sm ">
              <div className="card text-center mt-4">
                <div className="card-header bg-dark text-white">{path==="/"?"Login":"Sign up"}</div>
                  <div className="card-body text-center d-flex flex-column align-items-center">
                    {path !=="/signup" ? <LoginBox url={url} />:<SignupBox />} 
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
}

function mapStateToProps({ match }) { 
  return {
    url: match?match.url:null
  };
}

export default withRouter(connect(mapStateToProps)(AuthPage));
