import React, { Component } from "react";
import actions from "../../store/action";
import { connect } from "react-redux";

class Body extends Component {
  constructor() {
    super();
  }

  render() {
    let findDate = [];
    console.log(this.props.data, this.props.flag);
    // 判断flag然后进行筛选
    if (this.props.flag === "all") {
      findDate = this.props.data;
    } else {
      findDate = this.props.data.filter(item => item.flag === this.props.flag);
    }
    return (
      <div className="card-body">
        <ul className="list-group">
          {findDate.map((item, index) => {
            let zhuangtai = item.flag === "completed" ? true : false;
            return (
              <li className="list-group-item" key={index}>
                {/* 当值发生变发的时候，则给触发一个dispatch 发送一个Action 到reducer 去更改这么数据的状态 */}
                <input
                  type="checkbox"
                  name="todo"
                  id=""
                  onChange={() => {
                    this.props.select_complete(item.id);
                  }}
                  checked={zhuangtai}
                />
                &nbsp;&nbsp;
                <span className={item.flag === "completed" ? "complete" : ""}>
                  {item.content}
                </span>
                {/* 删除操作 */}
                <button
                  className="btn-danger float-right"
                  onClick={() => {
                    this.props.delete_item(item.id);
                  }}
                >
                  &times;
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ ...state.todo }),
  actions.todo
)(Body);
