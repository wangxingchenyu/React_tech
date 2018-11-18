import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter, BrowserRouter, Route, NavLink, Link, Redirect, Switch} from 'react-router-dom'
import QS from 'qs'
import actions from '../../store/action'
import './show.less'

class Show extends Component {
    constructor() {
        super();
    }

    render() {
        let {listData} = this.props
        return (
            <div>
                <ul>
                    {listData.map((item, index) => {
                        let {id, content} = item;
                        return <li key={index}>编号:{id} -- 内容:{content}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(state => ({...state.list}), actions.list)(Show)