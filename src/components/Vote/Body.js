import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Body extends Component {
    static contextTypes = {
        n: PropTypes.number,
        m: PropTypes.number
    };

    constructor(props, context) {
        super(props);
        console.log("aaaaaaaa");
        console.log(context);
    }

    render() {
        let {n, m} = this.context;
        let rate = n / (n + m);
        isNaN(rate) ? rate = 0 : rate = rate * 100;
        return (
            <div className='card-body'>
                <div className='alert alert-success'>支持:{this.context.n}</div>
                <div className='alert alert-danger'>反对:{this.context.m}</div>
                <div className='alert alert-dark'>支持率:{(rate.toFixed(2)) + "%"}</div>
            </div>
        )
    }
}