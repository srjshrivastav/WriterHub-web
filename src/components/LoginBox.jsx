import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../utils/api";
import { startLoading, stopLoading } from "../actions/loading";

function LoginBox(props) {
  const [username,setUserName] = useState(undefined);
  const [password,setPassword] = useState(undefined);
  const handleLogin =async () =>{
    props.dispatch(startLoading())
    const result =await login({ username, password }, props.dispatch);
    if(result === true){
      props.history.push(props.url ===  "/"?"/home":props.url);
    }
    props.dispatch(stopLoading())
  } 
  return (
    <>
      <input
        placeholder="Username"
        id="username"
        type="email"
        required
        className="form-control"
        style={styles.input}
        onChange={({nativeEvent:{target}})=>setUserName(target.value)}
      />
      <input
        placeholder="Password"
        id="password"
        type="password"
        required
        className="form-control"
        style={styles.input}
        onChange={({nativeEvent:{target}})=>setPassword(target.value)}
      />
        <button
          className="btn btn-outline-dark mt-3"
          onClick={handleLogin}
        >
          Login
        </button>

      <p className="mt-2">
        Not a member?
        <Link onClick={props.handleChange} to="/signup">
          Signup here
        </Link>
      </p>
    </>
  );
}

export const styles = {
  input: {
    width: "50%",
    marginTop: 20,
  },
};


function mapStateToProps(props,{match}){
  console.log(match)
  return{
    url:match.url
  }
}
export default withRouter(connect(mapStateToProps)(LoginBox));
