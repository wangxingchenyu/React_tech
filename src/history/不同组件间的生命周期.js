import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class One extends Component {
    constructor() {
        super()
        this.state = {
            show: "显示内容"
        }
        console.log("one组件的构造方法");
    }
    
    componentWillMount() {
        console.log("One组件即将挂载");
    }

    render() {
        console.log("one组件的render方法");
        return (
            <div>
                <button onClick={(e) => {
                    this.setState({show: "新的渲染的内容"})
                }}>更改
                </button>
                <Two show={this.state.show}></Two>
            </div>
        )
    }

    componentDidMount() {
        console.log("one组件加载完成");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('one组件即将更新');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("one组件更改完成");
    }

}

class Two extends Component {
    constructor() {
        super()
        console.log("two组件构造方法")
        this.state = {
            ch: "二组件的内容"
        }
    }

    componentWillMount() {
        console.log("Two组件将要挂载");
    }

    render() {
        console.log("two组件的render方法")
        let {show} = this.props;
        let {ch} = this.state;
        return (
            <div style={{background: "red", width: "300px", height: "200px"}}>two组件----{show}
                <button onClick={this.handClick}>自己更改</button>
                <h2>{ch}</h2>
            </div>
        )
    }

    handClick = (e) => {
        // this.setState((prevState, props) => ({ch: prevState.ch}));
        this.setState({ch: "新的状态"});
    }

    componentDidMount() {
        console.log("two组件完成挂载");
    }

    componentWillReceiveProps(nextprops) {
        console.log("将接收props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("组件将要更新");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('更新完成');
        console.log(prevProps);
        console.log(prevState);
    }
}

ReactDOM.render(<div><One/></div>, root);

