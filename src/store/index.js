import {createStore, applyMiddleware} from "redux"
import reducer from "./reducer/index"
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import {Provider,connect} from 'react-redux'

/**
 * 将reducer拆分到reducer目录里面
 */
let store = createStore(reducer, applyMiddleware(reduxLogger, reduxThunk, reduxPromise));
export default store;










/**
 *  第一步：安装 引入 applyMiddleware
 *
 *  第二步： 安装  yarn add redux-logger redux-thunk redux-promise
 *
 *  第三步：使用  redux-logger不用手动处理，当dispatch的时候会自动触发并打印数据到控制台中
 *
 *  增，删，改   查不需要()
 */


