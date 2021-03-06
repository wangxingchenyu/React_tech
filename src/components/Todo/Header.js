import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../store/action";

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let len = this.props.data.filter(item => item.flag === "uncompleted")
      .length;
    console.log("执行了render");
    return (
      <div className="card-header">
        <div>
          [任务列表] 所有任务:{" "}
          <span className="text-dark h3">{this.props.data.length}</span>{" "}
          &nbsp;&nbsp;未完成:
          <span className="text-danger h3">{len}</span>
        </div>
        <input type="text" className="form-control" onKeyUp={this.add_task} />
      </div>
    );
  }

  add_task = event => {
    let kc = event.keyCode;
    let val = event.target.value;
    let { addTask, data } = this.props;
    // 取的是键盘码 用react-redux后，所有actions
    if (kc === 13) {
      addTask({ content: val, flag: "uncompleted" });
      event.target.value = "";
    }
  };
}

export default connect(
  state => ({ ...state.todo }),
  actions.todo
)(Header);
