import React, { Component } from "react";

class ClearBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="col mr-1 btn btn-success"
        onClick={() => this.props.onClick()}
      >
        {this.props.cmd}
      </button>
    )
  }
}

export default ClearBtn;
