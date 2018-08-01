import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='card-footer'>
                <button className='btn btn-success' onClick={(e) => {
                    this.props.myRedux.updateState(state => {
                        let {n = 0} = state;
                        return state.n=n+1;
                    })
                }}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={(e) => {
                    this.props.myRedux.updateState(state => {
                        let {m = 0} = state;
                        return state.m=m+1;
                    })
                }}>反对
                </button>
            </div>
        )
    }
}