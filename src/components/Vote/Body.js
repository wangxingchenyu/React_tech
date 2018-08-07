import React, {Component} from 'react'
import PropTypes from 'prop-types'
import action from '../../store/action'
import {connect} from "react-redux"

class Body extends Component {

    constructor(props, context) {
        super(props);
        console.log(props)
    }

    componentWillMount() {
        this.props.init({
            n: 10,
            m: 100,
            title: "中国队vs日本队"
        })
        console.log("组件将要渲染");
    }

    render() {
        let {n, m} = this.props, rate = n / (n + m) * 100;
        console.log(this.props, '渲染里面');
        isNaN(rate) ? rate = 0 : null;
        return (
            <div className='card-body'>
                <div className='alert alert-success'>支持:{n}</div>
                <div className='alert alert-danger'>反对:{m}</div>
                <div className='alert alert-dark'>支持率:{rate.toFixed(2) + "%"}</div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    //反回什么，就在组件里面props里面放什么，反加一个对象 普通的数据，并不是一个函数
    return {
        ...state.vote
    }
}

let mapDispatchToProps = (dispatch) => {
    //反回什么，就在组件里面props里面放什么，反加一个对象,追加到this.props里面,但是却是一个函数
    return {
        init(obj) {
            dispatch(action.vote.init(obj));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Body)