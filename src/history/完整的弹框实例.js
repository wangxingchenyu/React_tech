import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './tan.less'

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state={
            show:"none"
        }
    }

    render() {
      return (
          <div className='d'>
              <button onClick={(e)=>{
                  this.setState({show:"block"})
              }}>弹</button>
              <Tan dis={this.state.show} chan={this.changeShow.bind(this)}></Tan>
          </div>
      )
    }
    changeShow(){
        this.setState({show:"none"});
    }

}


class Tan extends  Component{
   constructor(props){
       super(props)
   }
   render(){
       return (
           <div className='dialog' style={{display:this.props.dis}}>
               <div className='content'>
                   弹框内容
                   <button onClick={this.props.chan}>&times;</button>
               </div>
           </div>
       )
   }
}

ReactDOM.render(<div>
    <Parent/>
</div>,root);




