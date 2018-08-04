import React, {Component} from 'react'
import PropTypes from 'prop-types'
import action from '../../store/action'

export default class Body extends Component {

    constructor(props, context) {
        super(props);
        this.state = {refresh: false};
        let storeData = this.props.store.getState().vote;
        this.state = {...storeData};
    }

    componentWillMount() {
        this.props.store.dispatch(action.vote.init({
            title: "标题",
            content: "内容",
            n: 0,
            m: 0
        }))
    }

    //渲染完成后，执行did然后再随便定义一个setState,为了就是再次触发render
    componentDidMount() {
        this.props.store.subscribe(() => {
            console.log("执行了Did");
            this.setState({...this.props.store.getState().vote})
            //在完成的时候，
        })
    }

    render() {
        console.log("执行了渲染");
        console.log(this.state);
        let {n, m} = this.state, rate = n / (n + m) * 100;
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