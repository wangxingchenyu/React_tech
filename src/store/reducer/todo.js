import * as TYPES from "../action-types";

/**
 * reduer必须返回一个State来覆盖之前的State
 * @param state
 * @param action
 */
// 通过更改这个flag,进行选择它的值 ，这个只是起到一个过滤展法的作用，真正的数据更改是通过复选框来传值
export default function todo(state = { data: [], flag: "all" }, action) {
  // 产生一个新的内存地址
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TYPES.ADD_TASK:
      // 增加
      let { payload } = action;
      //如果data里面没有数据，则将payload的id置为1，如果有内容，则找出最后一个元素对象，然后将里面的id找到+1，就是为最新的payload值
      // id =1 如果新增加一条数据的话，则取到最后一个id然后在最后一个id的基础上面加1 新
      state.data.length === 0
        ? (payload["id"] = 1)
        : (payload["id"] = parseInt(state.data.slice(-1)[0]["id"]) + 1);
      state.data.push(payload);
      console.log(state);
      break;
    case TYPES.SELECTED:
      // 筛选
      let item = state.data.find(item => item.id === action.id);
      if (item) {
        //   如果是完成的话，则改成未完居，如果没有完成，则改成已完成
        item.flag === "uncompleted"
          ? (item.flag = "completed")
          : (item.flag = "uncompleted");
      }
      console.log(item);
      break;
    case TYPES.DELETE_ITEM:
      // 删除
      let { delete_id } = action;
      state.data = state.data.filter(item => item.id != delete_id);
      break;
    case TYPES.CHANGE_SEARCH:
      // 标记是否完成
      let { search_flag } = action;
      state.flag = search_flag;
      break;
  }

  /*务必返回一个对象*/
  return state;
}
