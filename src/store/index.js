import {createStore} from "redux"
import reducer from "./reducer/index"

/**
 * 将reducer拆分到reducer目录里面
 */
let store = createStore(reducer);
export default store;

