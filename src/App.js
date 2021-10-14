import React, { Component } from "react";

class App extends Component {
  state = {
    formula: "",
    display_result: 0,
    memory: 0,
    calc_component: "", //入力中の数値を一時的に保管
    operator: "", //入力中の演算子を一時的に保管
    calc_component_array: []
  };

  // 数値入力
  adnum = num => {
    this.setState({
      formula: this.state.formula + num + "",
      calc_component: this.state.calc_component + num + "",
      operator: ""
    });
  };

  // 四則演算(×/+/÷/-/=)
  calc = cmd => {
    if (cmd === "=") {
      if (this.state.calc_component === "") {
        return;
      }
      this.setState({
        formula: eval(this.state.formula),
        calc_component: "",
        display_result: eval(this.state.formula)
      });
    } else {
      if (this.state.operator !== "") {
        this.state.calc_component_array.pop();
        this.setState({
          operator: cmd,
          formula: this.state.formula.slice(0, -1) + cmd,
          calc_component_array: this.state.calc_component_array.concat(cmd)
        });
      } else {
        const cmd_and_num = [this.state.calc_component, cmd];
        this.setState({
          calc_component_array: this.state.calc_component_array.concat(
            cmd_and_num
          ),
          formula: this.state.formula + cmd + "",
          calc_component: "",
          operator: cmd
        });
      }
    }
  };

  // クリア機能(C/AC)
  clear = cmd => {
    if (cmd === "AC") {
      this.setState({
        formula: "",
        calc_component: "",
        calc_component_array: []
      });
    } else if (cmd === "C") {
      if (this.state.calc_component === "") {
        return;
      } else {
        this.setState({
          calc_component: "",
          formula: this.state.calc_component_array.join("")
        });
      }
    }
  };

  // メモリー機能(M+/M-/MC)
  memory = cmd => {
    if (cmd === "M+") {
      if (this.state.formula === "" || this.state.calc_component === "") {
        return;
      }
      this.setState({
        memory: this.state.memory + eval(this.state.formula),
        formula: "",
        display_result: eval(this.state.formula),
        calc_component_array: [],
        calc_component: ""
      });
    } else if (cmd === "M-") {
      if (this.state.formula === "" || this.state.calc_component === "") {
        return;
      }
      this.setState({
        memory: this.state.memory - eval(this.state.formula),
        formula: "",
        display_result: eval(this.state.formula),
        calc_component_array: [],
        calc_component: ""
      });
    } else if (cmd === "MC") {
      this.setState({
        memory: 0
      });
    }
  };

  renderNum = (i) => {
    return (
      <button className="btn btn-light col mr-1" onClick={e => this.adnum(i)}>
        {i}
      </button>
    );
  }

  renderCalc(cmd) {
    if (cmd === "/") {
      return (
        <button
          className="col mr-1 btn btn-success"
          onClick={e => this.calc(cmd)}
        >
          ÷
        </button>
      );
    } else if (cmd === "*") {
      return (
        <button
          className="col mr-1 btn btn-success"
          onClick={e => this.calc(cmd)}
        >
          ×
        </button>
      );
    }

    return (
      <button
        className="col mr-1 btn btn-success"
        onClick={e => this.calc(cmd)}
      >
        {cmd}
      </button>
    );
  }

  renderMemory(cmd) {
    return (
      <button
        className="col mr-1 btn btn-outline-success"
        onClick={e => this.memory(cmd)}
      >
        {cmd}
      </button>
    );
  }

  renderClear(cmd) {
    return (
      <button
        className="col mr-1 btn btn-success"
        onClick={e => this.clear(cmd)}
      >
        {cmd}
      </button>
    );
  }

  render() {
    return (
      <div className="container text-center custom-middle">
        <div className="row result_field">
          <div className="col font-weight-bold">
            メモリ: {this.state.memory}
          </div>
          <div className="col font-weight-bold">
            計算結果: {this.state.display_result}
          </div>
        </div>
        <input
          type="text"
          name="text"
          className="form-control mb-2"
          value={this.state.formula}
        />
        <div className="row">
          {this.renderMemory("MC")}
          {this.renderMemory("M-")}
          {this.renderMemory("M+")}
          {this.renderCalc("*")}
        </div>
        <div className="row mt-1">
          {this.renderNum(7)}
          {this.renderNum(8)}
          {this.renderNum(9)}
          {this.renderCalc("+")}
        </div>
        <div className="row mt-1">
          {this.renderNum(4)}
          {this.renderNum(5)}
          {this.renderNum(6)}
          {this.renderCalc("/")}
        </div>
        <div className="row mt-1">
          {this.renderNum(1)}
          {this.renderNum(2)}
          {this.renderNum(3)}
          {this.renderCalc("-")}
        </div>
        <div className="row mt-1">
          {this.renderNum(0)}
          {this.renderNum("00")}
          {this.renderNum(".")}
          {this.renderCalc("=")}
        </div>
        <div className="row mt-1">
          {this.renderClear("C")}
          {this.renderClear("AC")}
        </div>
      </div>
    );
  }
}

export default App;
