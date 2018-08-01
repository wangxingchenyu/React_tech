import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Vote from "./components/Vote/Vote";
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<div>
    <Vote title='法国 VS 葡萄牙'/>
    <Vote title='中国 VS 日本'/>
    <Vote title='中国 VS 泰国'/>
</div>, root);



/*
    context 上下文件传递
    1) 第一要在祖组件里面提前声明好数据的类型
    static childContextTypes={}

 */

