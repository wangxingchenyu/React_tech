import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter, BrowserRouter, Route, NavLink, Link, Redirect} from 'react-router-dom'

class NotFound extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>404页面</h1>
            </div>
        )
    }
}

export default connect()(NotFound)