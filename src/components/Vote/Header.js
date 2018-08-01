import React, {Component} from 'react'

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        let {title} = this.props;
        return (
            <div className='card-header'>
                <div className='card-title'>{title}</div>
            </div>
        )
    }
}

