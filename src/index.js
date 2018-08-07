import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Todo/Header";
import Body from "./components/Todo/Body";
import Footer from "./components/Todo/Footer";
import './todo.less'
import {Provider} from 'react-redux'
import store from './store'
import Vote from "./components/Vote/Vote";

/**
 * todo案例
 *aaa
 */
ReactDOM.render(<Provider store={store}>
    <div className='container' style={{marginTop: "10px"}}>
        <div className='card'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    </div>
</Provider>, root);


=======
import Dialog from "./components/Dialog";

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {display: "none"}
    }

    render() {
        return (
            <div>
                <button onClick={this.tan}>弹出</button>
                <Dialog display={this.state.display} hide={this.hide}/>
            </div>
        )
    }

    tan = () => {
        this.setState({display: "block"});
    }

    hide = () => {
        this.setState({display: "none"});
    }
}


ReactDOM.render(<div><Parent/></div>, root);


/*
  两个组件间的数据传递，通过props来修改

  第一步将父组件的state 传给子组件的一个属性，

  第二步：子组件接收这个属性来更改样式是否显示还是隐藏

  第三步： 在子组件里面，产生一个事件，而这个事件指向是这个组件的属性，而这个组件的属性指向是父组件方法，

  第四步：父组件这个方法通过改变状态来更改子组件里面的diaplay里面的值 ，从而达到父传子，子拿父的方法来更改状态

 */
>>>>>>> c80d40b1c05527262ea4571adef70e048ab3f339
