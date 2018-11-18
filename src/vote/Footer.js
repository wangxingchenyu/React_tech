import React, {Component} from 'react'
import {connect} from 'react-redux'
import action from '../store/action/index'
class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        console.log('footer',this.props);
        return (
            <div className='card-footer'>
                <button className='btn btn-primary' onClick={() => {
                    // this.props.store.dispatch({type:"SUPPORT"})
                    this.props.support();
                }}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={() => {
                    this.props.against();
                   // this.props.store.dispatch({type:"AGAINST"})
                }}>反对
                </button>
            </div>
        )
    }
}

export default connect(state=>({...state.vote}),action.vote)(Footer)
