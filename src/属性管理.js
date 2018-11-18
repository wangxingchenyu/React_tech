import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'


class Dialog extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        let {title, children} = this.props;
        return <div>
            title:{title}
            <h3 onClick={this.handClick}>内容:{children}</h3>
            <hr/>
            Dialog组件
            <hr/>
            <Children title={this.props.title}></Children>
        </div>
    }

    handClick = () => {
        alert("你点我了....");
    }
}

class Children extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            子组件
            {this.props.title}
        </div>
    }
}


render(<div><Dialog title={'标题'}>内容区</Dialog></div>, root)
