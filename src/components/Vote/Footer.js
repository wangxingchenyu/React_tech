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
                    console.log("执行支持");
                    this.props.store.dispatch({
                        type: "VOTE_SUPPORT"
                    })
                }}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={(e) => {
                    console.log("执行反对");
                    this.props.store.dispatch({
                        type: "VOTE_AGINST"
                    });
                }}>反对
                </button>
            </div>
        )
    }
}