import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../../store/action'

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            flags: [
                {bj: 'all', inner: "全部"},
                {bj: 'completed', inner: "完成"},
                {bj: 'uncompleted', inner: "未完成"},
            ]
        }
    }

    render() {
        let {flag} = this.props;
        console.log("页", flag);
        return (
            <div className='card-footer'>
                <ul className="nav nav-pills">

                    {
                        this.state.flags.map((item, index) => {
                            return <li className="nav-item" key={index}>
                                <a className={flag === item.bj ? "nav-link active" : "nav-link"} href="#" flag={item.bj}
                                   onClick={() => {
                                       console.log(item.bj);
                                       this.props.change_search(item.bj);
                                   }}>{item.inner}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(state => ({...state.todo}), actions.todo)(Footer)
