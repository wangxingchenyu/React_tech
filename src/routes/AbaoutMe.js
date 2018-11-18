import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter, BrowserRouter, Route, NavLink, Link, Redirect} from 'react-router-dom'

class AbaoutMe extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>AbaoutMe</div>
        )
    }
}

export default connect()(AbaoutMe)