import React,{Component}  from 'react'
import '../dialog.less'
export default class Dialog extends Component{
   constructor(){
       super();
   }
   render(){
       return (
           <div className='mask' style={{display:this.props.display}}>
               <div className='content'>
                   <button  onClick={this.props.hide}> &times; </button>
               </div>
           </div>
       )
   }
}