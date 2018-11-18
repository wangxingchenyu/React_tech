import React, {Component} from 'react'

export default class Header extends Component {
    constructor() {
        super();
    }

    static defaultProps = {
        title: "中国 vs 美国"
    };

    render() {
        return (
            <div className='card-header'>
                <h2 className='card-title'>{this.props.title}</h2>
            </div>
        )
    }
}