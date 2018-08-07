import React,{Component}  from 'react'

export default class Footer extends Component{
   constructor(){
       super();
   }
   render(){
       return (
           <div className='card-footer'>
               <ul className="nav nav-pills">
                   <li className="nav-item">
                       <a className="nav-link active" href="#">全部</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#">完成</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#">未完成</a>
                   </li>
               </ul>
           </div>
       )
   }
}