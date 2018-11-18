import * as TYPES from '../action-types'

/*初始化数据*/
let INIT_STATE = {
    listData: [
        {id: "one", content: "默认显示的内容"}
    ]
};


/*直接默认返回一个参数*/
export default function list(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    let {payload = {}} = action;
    switch (action.type) {
        case TYPES.ADD_LIST:
            state.listData.push(payload);
            break;
    }
    return state;
};







