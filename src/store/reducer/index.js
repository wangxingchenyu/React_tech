import {combineReducers} from "redux"
import personal from "./personal"
import vote from "./Vote"
import todo from './todo'

let reducer = combineReducers({
    personal,
    vote,
    todo
});

export default reducer;



