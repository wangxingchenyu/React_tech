import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as TYPES from "../../store/action-types"
import action from "../../store/action/index"
import {connect} from "react-redux"

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        let {support,against} = this.props;
        return (
            <div className='card-footer'>
                <button className='btn btn-success' onClick={support}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={against}>反对
                </button>
            </div>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         ...state.vote
//     }
// };
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         zhichi() {
//             dispatch(action.vote.support());
//         },
//         fandui() {
//             dispatch(action.vote.against());
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Footer)
export default connect(state => ({...state.vote}), action.vote)(Footer)
