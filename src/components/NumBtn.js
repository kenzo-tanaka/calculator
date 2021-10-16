import React, { Component } from "react";
const NumBtn = (props) => {
  return (
    <button
      className="btn btn-light col mr-1"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  )
};

export default NumBtn;
