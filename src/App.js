import React, { Component } from "react";
import NumBtn from "./components/NumBtn";
import ExecutorBtn from "./components/ExecutorBtn";
import ClearBtn from "./components/ClearBtn";
import MemoryBtn from "./components/MemoryBtn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: '',
      display_result: 0,
      memory: 0,
      operator: '',
      current_input: '',
      all_inputs: [],
    }
  }

  renderNum = (i) => {
    return <NumBtn value={i} onClick={() => this.addNum(i)} />;
  };

  renderCalc(cmd) {
    return <ExecutorBtn cmd={cmd} onClick={() => this.calc(cmd)} />;
  };

  renderClear(cmd) {
    return <ClearBtn cmd={cmd} onClick={() => this.clear(cmd)} />;
  };

  renderMemory(cmd) {
    return <MemoryBtn cmd={cmd} onClick={() => this.memory(cmd)} />;
  };

  addNum = num => {
    this.setState({
      operator: '',
      current_input: this.state.current_input + String(num),
      formula: this.state.formula + String(num),
    });
  };

  calc = cmd => {
    if (cmd === '=' && this.formula === '') { return; }
    if (cmd === '=') {
      this.setState({
        display_result: eval(this.state.formula),
        formula: ''
      })
      return;
    }

    this.setState({
      all_inputs: this.state.all_inputs.concat(this.state.current_input),
      operator: cmd,
      current_input: '',
      formula: this.state.formula + cmd,
    })
  };

  clear = cmd => {
    if (cmd === 'AC') { return this.acClear(); }

    this.cClear();
  };

  acClear() {
    this.setState({
      formula: '',
    });
  };

  cClear() {
    if (this.state.current_input === '') { return; }

    this.setState({
      current_input: '',
    });
  };

  memory = cmd => {
    if (cmd === 'M+') { return this.plusMemory(); }
    if (cmd === 'M-') { return this.minusMemory(); }
    this.clearMemory();
  };

  plusMemory() {
    if (this.state.formula === '') { return; }

    this.setState({
      memory: this.state.memory + eval(this.state.formula),
      formula: '',
    });
  }

  minusMemory() {
    if (this.state.formula === '') { return; }

    this.setState({
      memory: this.state.memory - eval(this.state.formula),
      formula: '',
    });
  }

  clearMemory() {
    this.setState({
      memory: 0
    });
  }

  numberRow = (nums) => {
    return nums.map(num => this.renderNum(num));
  };

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
          {this.renderMemory('MC')}
          {this.renderMemory('M-')}
          {this.renderMemory('M+')}
          {this.renderCalc('*')}
        </div>
        <div className="row mt-1">
          {this.numberRow([7, 8, 9])}
          {this.renderCalc('+')}
        </div>
        <div className="row mt-1">
          {this.numberRow([4, 5, 6])}
          {this.renderCalc('/')}
        </div>
        <div className="row mt-1">
          {this.numberRow([1, 2, 3])}
          {this.renderCalc('-')}
        </div>
        <div className="row mt-1">
          {this.numberRow([0, '00', '.'])}
          {this.renderCalc('=')}
        </div>
        <div className="row mt-1">
          {this.renderClear('C')}
          {this.renderClear('AC')}
        </div>
      </div>
    );
  }
}

export default App;
