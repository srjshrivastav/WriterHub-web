import React, { useState } from "react";
import {  withRouter,useHistory } from "react-router-dom";
import { createAuthor } from "../utils/api";
import { connect } from "react-redux";

function AuthorForm(props) {
  let state = {
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
  };
  const history = useHistory();
  const [authDetails, setAuthDetails] = useState(state);

  const handleSubmit =  () =>{

    createAuthor(props.dispatch, authDetails)
    .then((result)=>{
      if(result)
      history.push("/myArticles")
    })
  } 

  return (
    <div className="container d-flex justify-content-center">
      <div className="card text-center mt-4" style={{
        width:"50%"
      }}>
        <div className="card-header bg-dark text-white">Author Details</div>
        <div className="card-body">
          <input
            placeholder="first Name"
            id="firstName"
            type="text"
            required
            className="form-control mt-2"
            onChange={({ nativeEvent: { target } }) =>
              setAuthDetails({ ...authDetails, firstName: target.value })
            }
          />
          <input
            placeholder="Last Name"
            id="lastName"
            type="text"
            required
            className="form-control mt-4"
            onChange={({ nativeEvent: { target } }) =>
              setAuthDetails({ ...authDetails, lastName: target.value })
            }
          />
          <input
            placeholder="D.O.B"
            id="dob"
            type="date"
            required
            className="form-control mt-4"
            onChange={({ nativeEvent: { target } }) =>
              setAuthDetails({ ...authDetails, dob: target.value })
            }
          />
          <input
            placeholder="Contact No."
            id="phone"
            type="tel"
            required
            className="form-control mt-4"
            onChange={({ nativeEvent: { target } }) =>
              setAuthDetails({ ...authDetails, phone: target.value })
            }
          />
          <button className="btn btn-outline-dark mt-3" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(connect()(AuthorForm));
