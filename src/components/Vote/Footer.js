import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    constructor() {
        super();
    }

    static contextTypes = {
        callback: PropTypes.func
    };

    render() {
        return (
            <div className='card-footer'>
                <button className='btn btn-success' onClick={(e) => {
                    let {callback} = this.context;
                    callback("支持");
                }}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={(e) => {
                    let {callback} = this.context;
                    callback("反对");
                }}>反对
                </button>
            </div>
        )
    }
}