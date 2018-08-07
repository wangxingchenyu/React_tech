import * as TYPES from '../action-types'

/**
 * reduer必须返回一个State来覆盖之前的State
 * @param state
 * @param action
 */
export default function todo(state = {data: [], flag: "all"}, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.ADD_TASK:
            let {payload} = action;
            console.log('看传递过来的值 ', payload);
            //如果data里面没有数据，则将payload的id置为1，如果有内容，则找出最后一个元素对象，然后将里面的id找到+1，就是为最新的payload值
            state.data.length === 0 ? payload['id'] = 1 : payload['id'] = parseInt(state.data.slice(-1)[0]['id']) + 1;
            state.data.push(payload);
            console.log(state);
            break;
        case TYPES.SELECTED:
            //利用find来查找
            console.log(action.id);
            let item = state.data.find(item => item.id === action.id);
            if (item) {
                item.flag === "uncompleted" ? item.flag = "completed" : item.flag = "uncompleted";
            }
            console.log(item);
            break;
        case TYPES.DELETE_ITEM:
            let {delete_id} = action;
            state.data = state.data.filter(item => item.id != delete_id)
            break;
        case TYPES.CHANGE_SEARCH:
            let {search_flag} = action;
            state.flag = search_flag;
            console.log(state.flag)
            console.log(search_flag)
            console.log("后台接收到的flag", state.flag);
            // state.data.filter(item => item.flag === state.flag);
            console.log(state.data);
            break;
    }
    /**
     * 返回的必须是一个新的对象
     */
    return state;
};






