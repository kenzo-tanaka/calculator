(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),n=t(2),s=t.n(n),o=(t(15),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(o.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),App=function(_Component){function App(){var _getPrototypeOf2,_this;Object(_Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={formula:"",display_result:0,memory:0,calc_component:"",operator:"",calc_component_array:[]},_this.adnum=function(e){_this.setState({formula:_this.state.formula+e+"",calc_component:_this.state.calc_component+e+"",operator:""})},_this.calc=function(cmd){if("="===cmd){if(""===_this.state.calc_component)return;_this.setState({formula:eval(_this.state.formula),calc_component:"",display_result:eval(_this.state.formula)})}else if(""!==_this.state.operator)_this.state.calc_component_array.pop(),_this.setState({operator:cmd,formula:_this.state.formula.slice(0,-1)+cmd,calc_component_array:_this.state.calc_component_array.concat(cmd)});else{var cmd_and_num=[_this.state.calc_component,cmd];_this.setState({calc_component_array:_this.state.calc_component_array.concat(cmd_and_num),formula:_this.state.formula+cmd+"",calc_component:"",operator:cmd})}},_this.clear=function(e){if("AC"===e)_this.setState({formula:""});else if("C"===e){if(""===_this.state.calc_component)return;_this.setState({calc_component:"",formula:_this.state.calc_component_array.join("")})}},_this.memory=function(cmd){if("M+"===cmd){if(""===_this.state.formula||""===_this.state.calc_component)return;_this.setState({memory:_this.state.memory+eval(_this.state.formula),formula:"",display_result:eval(_this.state.formula),calc_component_array:[],calc_component:""})}else if("M-"===cmd){if(""===_this.state.formula||""===_this.state.calc_component)return;_this.setState({memory:_this.state.memory-eval(_this.state.formula),formula:"",display_result:eval(_this.state.formula),calc_component_array:[],calc_component:""})}else"MC"===cmd&&_this.setState({memory:0})},_this}return Object(_Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(_Users_tanakakenzou_Documents_sandbox_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"renderNum",value:function(e){var _=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn btn-light col mr-1",onClick:function(t){return _.adnum(e)}},e)}},{key:"renderCalc",value:function(e){var _=this;return"/"===e?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"col mr-1 btn btn-success",onClick:function(t){return _.calc(e)}},"\xf7"):"*"===e?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"col mr-1 btn btn-success",onClick:function(t){return _.calc(e)}},"\xd7"):react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"col mr-1 btn btn-success",onClick:function(t){return _.calc(e)}},e)}},{key:"renderMemory",value:function(e){var _=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"col mr-1 btn btn-outline-success",onClick:function(t){return _.memory(e)}},e)}},{key:"renderClear",value:function(e){var _=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"col mr-1 btn btn-success",onClick:function(t){return _.clear(e)}},e)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container text-center custom-middle"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row result_field"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col font-weight-bold"},"\u30e1\u30e2\u30ea: ",this.state.memory),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col font-weight-bold"},"\u8a08\u7b97\u7d50\u679c: ",this.state.display_result)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{type:"text",name:"text",className:"form-control mb-2",value:this.state.formula}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row"},this.renderMemory("MC"),this.renderMemory("M-"),this.renderMemory("M+"),this.renderCalc("*")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row mt-1"},this.renderNum(7),this.renderNum(8),this.renderNum(9),this.renderCalc("+")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row mt-1"},this.renderNum(4),this.renderNum(5),this.renderNum(6),this.renderCalc("/")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row mt-1"},this.renderNum(1),this.renderNum(2),this.renderNum(3),this.renderCalc("-")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row mt-1"},this.renderNum(0),this.renderNum("00"),this.renderNum("."),this.renderCalc("=")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row mt-1"},this.renderClear("C"),this.renderClear("AC")))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},9:function(e,_,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.59e06338.chunk.js.map