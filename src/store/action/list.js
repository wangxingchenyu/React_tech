import * as TYPES from '../action-types'

let list = {
    addList(payload) {
        return {
            type: TYPES.ADD_LIST,
            payload
        }
    }
};

export default list