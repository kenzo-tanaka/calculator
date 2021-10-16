import React, { Component } from "react";

class ExecutorBtn extends Component {
  constructor(props) {
    super(props);
  }

  translateToExecutor(cmd) {
    if (cmd === '/') { return '÷' }
    if (cmd === '*') { return 'x' }

    return cmd;
  }

  render() {
    return (
      <button
        className="col mr-1 btn btn-success"
        onClick={() => this.props.onClick()}
      >
        {this.translateToExecutor(this.props.cmd)}
      </button>
    )
  }
}

export default ExecutorBtn;
