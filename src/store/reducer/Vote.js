import * as TYPES from "../action-types"

export default function vote(state = {n: 0, m: 0, content: "", ttile: ""}, action) {
    switch (action.type) {
        case TYPES.VOTE_SUPPORT:
            console.log(111);
            state = {...state, n: state.n + 1};
            console.log('支持结果', state);
            break;
        case TYPES.VOTE_AGINST:
            console.log(22);
            state = {...state, m: state.m + 1};
            break;
        case TYPES.VOTE_INIT:
            delete action.type;
            state = {...action};
            console.log('初始化数据', state);
    }
    return state;
}

