import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter, BrowserRouter, Route, NavLink, Link, Redirect, withRouter} from 'react-router-dom'
import './Nav.less'
class index extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">REACT-ROUTER</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">首页 <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/list">列表页</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/personal">个人中心</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">关于我们</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(connect()(index))