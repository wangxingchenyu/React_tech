/**
 * 添加actions动作，本质就是用一个自定义的函数，返回一个对象，其中对象里面有
 *   1) type 属性   2）还有其它专过来的值
 * @type {{}}
 */
import * as TYPES from '../action-types'

let todoAction = {
    addTask(payload) {
        return {
            type: TYPES.ADD_TASK,
            payload  //接收diapatch发送过来的内容
        }
    },
    select_complete(newpay){
       return {
           type:TYPES.SELECTED,
           newpay
       }
    }

};

export default todoAction;
