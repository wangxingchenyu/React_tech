import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Vote from "./vote/Vote";
/***
 *  第一步安装 : redux yarn add redux react-redux
 */

//引入createStore 来创建容器
import {createStore} from 'redux'

let INIT_STATE = {
    s: 0,
    a: 0
}

// 两个参数，第一个参数是状态，第二个是actions 且action 必须的type 属性
// 是通过this.props.store.dispatch()分发过来的内容 {type:""}
// type类型来定义了行为标识(提前注册),只有行为标识注册好后，才会更改状态数据
function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "SUPPORT" :
            state = {...state, s: state.s + 1}
            break;
        case "AGAINST" :
            state = {...state, a: state.a + 1}
            break;
    }
    return state;
}

//  返回一个容器，里面有几个参数，第一个参数就是reducer 且是一个函数,且这个容器会有三个方法， dispatch ,subscribe ,getState
let store = createStore(reducer)

render(<div>
    <Vote store={store}/>
</div>, root);





