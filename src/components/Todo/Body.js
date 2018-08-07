import React, {Component} from 'react'
import actions from '../../store/action'
import {connect} from 'react-redux'

class Body extends Component {
    constructor() {
        super();
    }

    render() {
        let {id, content, flag} = this.props.data;
        return (
            <div className='card-body'>
                <ul className='list-group'>
                    {this.props.data.map((item, index) => {
                        return <li className='list-group-item' key={index}>
                            <input type="checkbox" name="todo" id="" checked={item.flag === "completed" ? true : false}/>
                            &nbsp;&nbsp;
                            <span className={item.flag === "completed" ? 'complete' : ""}>{item.content}</span>
                            <button className='btn-danger float-right'>&times;</button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(state => ({...state.todo}), actions.todo)(Body)


