import React, {Component} from 'react'
import actions from '../../store/action'
import {connect} from 'react-redux'

class Body extends Component {
    constructor() {
        super();
    }

    render() {
        let findDate = [];
        console.log(this.props.data, this.props.flag);
        if (this.props.flag === 'all'){
            findDate = this.props.data;
        }  else{
            findDate = this.props.data.filter(item=>item.flag === this.props.flag)
        }
        return (
            <div className='card-body'>
                <ul className='list-group'>
                    {findDate.map((item, index) => {
                        let zhuangtai = item.flag === "completed" ? true : false;
                        return <li className='list-group-item' key={index}>
                            <input type="checkbox" name="todo" id="" onChange={() => {
                                this.props.select_complete(item.id);
                            }} checked={zhuangtai}/>
                            &nbsp;&nbsp;
                            <span className={item.flag === "completed" ? 'complete' : ""}>{item.content}</span>
                            <button className='btn-danger float-right' onClick={() => {
                                this.props.delete_item(item.id);
                            }}>&times;</button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(state => ({...state.todo}), actions.todo)(Body)


