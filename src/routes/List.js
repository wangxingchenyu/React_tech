import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter, BrowserRouter, Route, NavLink, Link, Redirect, Switch, withRouter, Router} from 'react-router-dom'
import Add from './List/Add'
import Show from './List/Show'

class List extends Component {
    constructor(props, context) {
        super(props);
        console.log(props);
    }
    render() {
        return (

            <div className='row'>
                <div className='col-2'>
                    <ul className='list-group'>
                        <NavLink to="/list/add?id=3" className='list-group-item'>添加</NavLink>
                        <NavLink to="/list/show?id=54" className='list-group-item'>列表</NavLink>
                    </ul>
                </div>
                <div className='col-10'>
                        <Switch>
                            <Route path="/list/show" component={Show}/>
                            <Route path="/list/add" component={Add}/>
                            {/*<Redirect from='/list' to='/list/show'/>*/}
                        </Switch>
                </div>
            </div>
        )
    }
}

export default connect()(List)






