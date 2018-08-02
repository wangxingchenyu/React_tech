import {combineReducers} from "redux"
import personal from "./personal"
import vote from "./Vote"

let reducer = combineReducers({
    personal,
    vote
});

export default reducer;


