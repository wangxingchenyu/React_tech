import React, {Component} from 'react'
import {connect} from 'react-redux'
import action from '../store/action/index'
class Body extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fresh: 0
        }
    }

    render() {
        console.log(this.props);
        let {n,m} = this.props;
        // let {s = 0, a = 0} = getState();
        let rate = (n/ (n + m)) * 100;
        isNaN(rate) ? rate = 0 : null;
        return (
            <div className='card-body'>
                {this.state.fresh}
                <div className='alert alert-success'>支持人数:{n}</div>
                <div className='alert alert-warning'>反对人数:{m}</div>
                <div className='alert alert-dark'>支持率:{rate.toFixed(2) + "%"}</div>
            </div>
        )
    }

    // componentDidMount() {
    //     this.props.store.subscribe(() => {
    //         this.setState({fresh: this.state.fresh + 1});
    //     })
    // }
}

//这样的话，在本组件里面的props里面就有会vote相关状态

// 这样的话，props里面就可以用vote的方法来自动的dispatch

export  default connect(state=>({...state.vote}),action.vote)(Body)

//使用react-redux之后 ,之前一些操作都可以省去部分

/**
 *  第一：store层级传递
 *
 *  第二：subscribe使用
 *
 *  第三: 状态的获取，不需要getState
 *
 *  第四：不需要直接的dispatch
 *
 *
 */


