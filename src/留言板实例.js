import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            msgs: []
        }

    }

    static defaultProps = {
        title: "云知梦留言板"
    }

    render() {
        return (
            <div>
                <Header add={this.parentAdd} title={this.props.title}></Header>
                <MessageList msgs={this.state.msgs}></MessageList>
            </div>
        )
    }

    parentAdd = (val) => {
        let {msgs} = this.state;
        msgs.push(val);
        this.setState({msgs});
    }

}

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <input onKeyUp={this.sendMessage} type="text" placeholder={"请在此输入留言"}/>
            </div>
        )
    }

    // 使用箭头函数的目的就是保证this指向组件实例
    sendMessage = (event) => {
        let kc = event.keyCode;
        let val = event.target.value;
        if (kc === 13) {
            this.props.add(val);
            event.target.value=""
        }
    }

}

// 在回车一瞬间，将数据发送出去

/**
 *  三个组件，父组件，两个子组件，一个是头组件，一个是列表组件
 *
 *  头组件传递数据给父组件，
 *      - 事件触发 由到头部组件要将判断事件源相关操作，所以要在onkeyUp里面触发
 *      判断键盘码 取到表单里面的值
 *
 *      二 将值传递给父组件
 *
 */


class MessageList extends Component {
    constructor() {
        super()
    }

    render() {
        let {msgs} = this.props
        return (
            <div>
                留言板的内容
                <hr/>
                {msgs.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </div>
        )
    }
}

render(<div><Message/></div>, root);
