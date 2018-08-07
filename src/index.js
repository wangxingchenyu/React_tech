import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Todo/Header";
import Body from "./components/Todo/Body";
import Footer from "./components/Todo/Footer";
import './todo.less'
import {Provider} from 'react-redux'
import store from './store'
import Vote from "./components/Vote/Vote";

/**
 * todo案例
 *
 */
ReactDOM.render(<Provider store={store}>
    <div className='container' style={{marginTop: "10px"}}>
        <div className='card'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    </div>
</Provider>, root);


