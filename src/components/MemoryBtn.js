import React, { Component } from "react";

class MemoryBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="col mr-1 btn btn-outline-success"
        onClick={() => this.props.onClick()}
      >
        {this.props.cmd}
      </button>
    )
  }
}

export default MemoryBtn;
