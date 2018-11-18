import {combineReducers} from "redux"
import personal from "./personal"
import vote from "./Vote"
import todo from './todo'
import list from './list'

let reducer = combineReducers({
    personal,
    vote,
    todo,
    list
});

export default reducer;



