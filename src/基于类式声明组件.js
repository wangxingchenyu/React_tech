import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'

/***
 *  1 通常情况下，类式声明组件，类名都是大写开头
 *  2  会有一个构造方法
 *  3 渲染页面不再是简单的Return jsx元素，而是利用类里面的render方法来返回内容
 *  4 在函数式组件，将属性与inderhtml里面的内容都放在props里面，
 *  5 this代表这个组件
 *  6 props是this里面
 *  7 如果想在构造方法里面用props,得先传入
 *
 *  +++++++++++++++++++++++++++++++++
 *  事件，生命周期，redux存储
 *
 */

class Dialog extends Component {
    constructor(props, context) {
        super(props, context)
        console.log(props)
    }

    componentWillMount() {
        console.log("组件将要挂载")
    }

    componentDidMount() {
        console.log("组件已经挂载");
    }

    render() {
        let {title, children} = this.props;
        return <div>
            title:{title}
            <h3 onClick={this.handClick}>内容:{children}</h3>
            <hr/>
            Dialog组件
        </div>
    }

    handClick = () => {
        alert("你点我了....");
    }
}


render(<div><Dialog title={'标题'}>内容区</Dialog></div>, root)
