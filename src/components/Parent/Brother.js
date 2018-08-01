import React, {Component} from 'react'

export default class Brother extends Component {
    constructor() {
        super();
    }

    render() {
        let {abc} = this.props;
        return (
            <div className='bg-dark text-white'>Brother {abc}</div>
        )
    }
}