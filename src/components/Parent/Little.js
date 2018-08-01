import React, {Component} from 'react'

export default class Little extends Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        let {title, change} = this.props;
        return (
            <div className='bg-light text-dark'>Little {title}
                <button className='btn btn-success' onClick={change}>改</button>
            </div>
        )
    }
}

/**
 *   1)父子间的传递数据，也可以兄弟间传递，共享一个父亲
 *
 *
 *
 */
