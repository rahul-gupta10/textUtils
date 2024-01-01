import React from "react";

function Alert(props) {
  return (
    props.alert &&
      <div className="alert alert-primary" role="alert">
        {props.alert.msg}
      </div>
  );
}

export default Alert;
