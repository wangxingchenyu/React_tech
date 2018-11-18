import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter, BrowserRouter, Route, NavLink, Link, Redirect} from 'react-router-dom'
import actions from '../../store/action'

class Add extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>
                    <label htmlFor="">编号</label>
                    <input type="text" className='form-control' placeholder='编号' ref='id'/>
                </p>

                <p>
                    <label htmlFor="">内容</label>
                    <input type="text" className='form-control' placeholder='内容' ref='content'/>
                </p>
                <p>
                    <input type="submit" onClick={this.submit} value='发布' className='btn btn-primary'/>
                </p>
            </div>
        )
    }

    submit = (event) => {
        let {id, content} = this.refs;
        let {addList, history} = this.props;
        addList({
            id: id.value,
            content: content.value
        });
        /*清空表单里面的值 */
        id.value = content.value = "";
        /*清空*/
        /*添加成功能后，然后跳转到show*/
        history.push("/list/show");

    }
}

export default connect(state => ({...state.list, ...state.vote}), actions.list)(Add)