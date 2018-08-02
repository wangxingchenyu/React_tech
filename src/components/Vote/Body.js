import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Body extends Component {

    constructor(props, context) {
        super(props);
        this.state = {refresh: false}
    }

    //渲染完成后，执行did然后再随便定义一个setState,为了就是再次触发render
    componentDidMount() {
        this.props.store.subscribe(() => {
            console.log("执行了Did");
            this.setState({refresh: !this.state.refresh});  //this.setState()会自动触发render
        })
    }

    render() {
        console.log("执行了渲染");
        let {n = 0, m = 0} = this.props.store.getState(), rate = n / (n + m) * 100;
        isNaN(rate) ? rate = 0 : null;
        console.log(n, m);
        return (
            <div className='card-body'>
                <div className='alert alert-success'>支持:{n}</div>
                <div className='alert alert-danger'>反对:{m}</div>
                <div className='alert alert-dark'>支持率:{rate.toFixed(2) + "%"}</div>
            </div>
        )
    }
}