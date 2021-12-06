import React from "react";
import { connect } from "react-redux";
import { removeMessge } from "../actions/apiErrorAlert";

function Alert(props) {
  const { message, type, dispatch } = props;
  return (
    <div
      className={
        "alert alert-dismissible fade show " +
        (type === "SUCCESS" ? "alert-success" : "alert-danger")
      }
      role="alert"
      style={{zIndex:100}}
    >
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => dispatch(removeMessge())}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

function mapStateToProps({ alertMessage }) {
  if (alertMessage !== null)
    return {
      message: alertMessage.message,
      type: alertMessage.type,
    };
  else {
    return {
      message: null,
      type: null,
    };
  }
}

export default connect(mapStateToProps)(Alert);
