import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as TYPES from "../../store/action-types"
import action from "../../store/action/index"

export default class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='card-footer'>
                <button className='btn btn-success' onClick={(e) => {
                    console.log("执行支持");
                    this.props.store.dispatch(action.vote.support());
                }}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={(e) => {
                    console.log("执行反对");
                    this.props.store.dispatch(action.vote.against());
                }}>反对
                </button>
            </div>
        )
    }
}

