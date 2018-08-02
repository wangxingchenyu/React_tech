
import * as TYPES from "../action-types"

let vote={
   support(){
       return{type:TYPES.VOTE_SUPPORT}
   } ,
    against(){
       return {type:TYPES.VOTE_AGINST}
    }
};

export default vote;