import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {  signup } from "../utils/api";

function SignupBox(props) {
  const [passMatch, setPassMatch] = useState(true);
  const [fullName,setName] = useState(undefined);
  const [username,setUserName] = useState(undefined);
  const [password,setPassword] = useState(undefined);
  const [cnfPassword,setCnfPassword] = useState(undefined);
  const handleSignUp = () => {
    if (password === cnfPassword && password !== undefined) {
      setPassMatch(true);
      signup({ fullName, username, password }, props.dispatch);
    } else {
      setPassMatch(false);
    }
  };
  return (
    <>
    <input
        placeholder="Full Name"
        id="name"
        type="text"
        required
        className="form-control"
        style={styles.input}
        onChange={({nativeEvent:{target}})=>setName(target.value)}
      />
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
        <input
          placeholder="Confirm password"
          id="password"
          type="password"
          className="form-control"
          style={styles.input}
          onChange={({nativeEvent:{target}})=>setCnfPassword(target.value)}
        />
      {!passMatch && <span className="error-text">password doesn't match</span>}
        <Link
          className="btn btn-outline-dark mt-3"
          to="/"
          onClick={handleSignUp}
        >
          Sign up
        </Link>
      <p className="mt-2">
Already a member? <Link onClick={props.handleChange} to="/"> Signin here
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

export default withRouter(connect()(SignupBox));
