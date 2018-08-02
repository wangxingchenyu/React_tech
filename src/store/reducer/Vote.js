import * as TYPES from "../action-types"

export default function vote(state = {n: 0, m: 0}, action) {
    switch (action.type) {
        case TYPES.VOTE_SUPPORT:
            console.log(111);
            state = {...state, n: state.n + 1};
            break;
        case TYPES.VOTE_AGINST:
            console.log(22);
            state = {...state, m: state.m + 1};
            break;
    }
    console.log(state);
    return state;
}
