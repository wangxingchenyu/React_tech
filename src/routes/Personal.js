import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter, BrowserRouter, Route, NavLink, Link, Redirect} from 'react-router-dom'

class Personal extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>Personal</div>
        )
    }
}

export default connect()(Personal)