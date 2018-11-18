import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'

class Dialog extends Component {
    constructor(props, context) {
        super(props, context)
        console.log('constructor-01')
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log("willMount-02");
    }

    render() {
        console.log("render-03");
        let {count} = this.state;
        return (
            <div> hello 云知梦
                <h1>{count}</h1>
                <hr/>
                <button onClick={this.change}>更新</button>
                <Children title={this.state.count}></Children>
            </div>
        )
    }

    change = () => {
        this.setState({count: this.state.count});
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 可以人为的进行判断，什么时机触发componetWillUpdate,componentDidUpdate
        return true;
        //本身并没有真正的计算state 或者props前后一定要有变化，只要触发setState就可以
    }

    /**
     * 本身并不会计算属性或者是状态是否真的有差异
     */
    componentDidMount() {
        console.log("didMount-04");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("willUpdate");
    }

    componentDidUpdate(preProps, nextState) {
        console.log("DidUpdate");
    }

}


class Children extends Component {
    constructor(props, context) {
        super(props, context)
        console.log('child-01');
    }

    static defaultProps = {
        title: "默认的标题"
    }

    componentWillMount() {
        console.log("child-02");
    }

    componentDidMount() {
        console.log("child-mount-04");
    }

    render() {
        console.log('child-rendr-03');
        return (
            <div>子组修的
                <h3>{this.props.title}</h3>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log("child-props");
    }

    shouleComponetUdate() {
        console.log("children-should")
        return true
    }

    componentWillUpdate() {
        console.log("child-will-update");
    }

    componentDidUpdate() {
        console.log("child-did-update");
    }


}


ReactDOM.render(<div><Dialog/></div>, root);
