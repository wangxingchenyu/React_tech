/**
 * 添加actions动作，本质就是用一个自定义的函数，返回一个对象，其中对象里面有
 *   1) type 属性   2）还有其它专过来的值
 * @type {{}}
 */
import * as TYPES from '../action-types'

let todoAction = {
    addTask(payload) { //当使用redux-thunk的时候是这样操作的，直接给Dispatch分发到action中，你自行处理
        //其本质是发dispatch分发两次，一次是发送结果为undefined的内容，
        // 第二次发送的是异步的数据的内容
        return dispatch => {
            setTimeout(() => {
                dispatch({
                    type: TYPES.ADD_TASK,
                    payload  //接收diapatch发送过来的内容
                })
            }, 3000);
        };
    },
    select_complete(id) {
        return {
            type: TYPES.SELECTED,
            id
        }
    },
    delete_item(delete_id) {
        return {
            type: TYPES.DELETE_ITEM,
            delete_id
        }
    },
    change_search(search_flag) {
        return {
            type: TYPES.CHANGE_SEARCH,
            search_flag
        }
    }

};

export default todoAction;
