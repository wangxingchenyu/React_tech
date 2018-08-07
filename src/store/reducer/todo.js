import * as TYPES from '../action-types'

/**
 * reduer必须返回一个State来覆盖之前的State
 * @param state
 * @param action
 */
export default function todo(state = {data: [], flag: "all"}, action) {
    switch (action.type) {
        case TYPES.ADD_TASK:
            let {payload} = action;
            //如果data里面没有数据，则将payload的id置为1，如果有内容，则找出最后一个元素对象，然后将里面的id找到+1，就是为最新的payload值
            state.data.length === 0 ? payload['id'] = 1 : payload['id'] = parseInt(state.data.slice(-1)[0]['id']) + 1;
            state.data.push(payload);
            break;
        default:
            return state
    }
    /**
     * 返回的必须是一个新的对象
     */
    return JSON.parse(JSON.stringify(state));
};






