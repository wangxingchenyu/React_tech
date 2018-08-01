import React, {Component} from 'react'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import PropTypes from 'prop-types'

export default class Vote extends Component {
    constructor(props, context) {
        super(props, context);
        let {count: {n, m}} = this.props;
        this.state = {n, m}
    }

    static defaultProps = {
        title: "defatult title",
        count: {
            n: 0,
            m: 0
        }
    };

    //在父组件里面默认context数据的类型
    static childContextTypes = {
        n: PropTypes.number,
        m: PropTypes.number,
        callback: PropTypes.func
    };

    getChildContext() {
        let {n, m} = this.state;
        return {
            n,
            m,
            callback: this.add
        }
    }

    add = (flag) => {
        switch (flag) {
            case "支持":
                this.setState({n: this.state.n + 1});
                break;
            case "反对":
                this.setState({m: this.state.m + 1});
                break;
        }
    };

    render() {
        return (
            <div className='container' style={{marginBottom:"10px"}}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card bg-light text-dark'>
                            <Header title={this.props.title}/>
                            <Body/>
                            <Footer add={this.add}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
