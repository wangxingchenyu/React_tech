import React from 'react'
import ReactDOM from 'react-dom'
import Vote from "../components/Vote/Vote";
import 'bootstrap/dist/css/bootstrap.css'
import {createStore} from "redux"

//赋一个默认的State值 ，后面传一个Action，里面传一个对象，对象里面有一个type属性
let reducer = (state = {n: 0, m: 0}, action) => {
    switch (action.type) {
        case "VOTE_SUPPORT":
            console.log('support');
            state = {...state, n: state.n + 1};
            console.log(state);
            break;
        case 'VOTE_AGINST':
            console.log("againgst");
            state = {...state, m: state.m + 1};
            console.log(state);
            break;
    }

    //必须反回一个新的state来覆盖原来的state
    return state;
};

let store = createStore(reducer);

/**
 *   store 返回
 *   createStore,
 *   combineReducers,
 *   bindActionCreators,
 *   applyMiddleware,
 *
 *
 */

ReactDOM.render(<div><Vote title='给定的标题' store={store}/></div>, root);

