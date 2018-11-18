import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {HashRouter, Route, Switch} from 'react-router-dom'
import AboutMe from './AbaoutMe'
import Home from './Home'
import Personal from './Personal'
import List from './List'
import NotFount from './NotFound'
import {Provider} from 'react-redux'
import store from '../store/index'
import Nav from '../components/Nav/Index'

/***
 *  最外面是react-redux 然后里面放路由
 *
 */
ReactDOM.render(<Provider store={store}>
    <div>
        <HashRouter>
            <div>
                <Nav/>
                <div className='container' style={{marginTop: "20px"}}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/personal" component={Personal}/>
                        <Route path="/list" component={List}/>
                        <Route path="/aboutus" component={AboutMe}/>
                        <Route render={() => {
                            return <div><NotFount/></div>;
                        }}/>
                    </Switch>
                </div>
            </div>
        </HashRouter>
    </div>
</Provider>, root);





