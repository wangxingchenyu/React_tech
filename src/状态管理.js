import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types'

// 状态: 组件自身的状态， 一个是全局的状态
/**
 *    vue data vuex
 *    react state redux react-redux
 */

class Dialog extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            count: 0,
            loading: false,
            data: [
                {id: 1, username: "alex", password: "123"},
                {id: 1, username: "alex", password: "123"},
                {id: 1, username: "alex", password: "123"},
                {id: 1, username: "alex", password: "123"},
                {id: 1, username: "alex", password: "123"},
                {id: 1, username: "alex", password: "123"},
            ]
        }
    }

    static  defaultProps = {title: "title"};

    propTypes = {
        title: PropTypes.string.isRequired,
        obj: PropTypes.object,
        fun: PropTypes.fun
    }

    render() {
        let {count, data} = this.state;
        let {title, children} = this.props;
        return <div>
            title:{title}
            <h3 onClick={this.handClick}>内容:{children}</h3>
            <hr/>
            Dialog组件
            <hr/>
            状态管理: <h2>{count}</h2>
            <button onClick={this.change}>改变</button>
            <hr/>
            {data.map((item, index) => {
                return <li style={{listStyle: "none"}} key={index}>{item.id}-{item.username}-{item.password}</li>
            })}
        </div>
    }

    change = () => {
        //    保证this.指向的一定是这个组件的实例,并不是全部
        this.setState({count: this.state.count + 1});
        console.log(this.state);
    }

    handClick = () => {
        alert("你点我了....");
    }
}


render(<div><Dialog title={'标题'}>内容区</Dialog></div>, root)
