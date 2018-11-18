import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {
    constructor() {
        super();
    }

    //设置上下文的数据类型
    static childContextTypes = {
        store: PropTypes.object
    };

    //设置上下文的数据
    getChildContext = () => {
        return {
            store: this.props.store
        }
    };

    render() {
        //由于provider是双闭合标签，则props里面有一个children的属性，则可以拿过来重新的渲染
        return this.props.children;
    }
}

let connect = (mapStateToProps, mapDispatchToProps) => {
    return function (Component) {
        return class Proxy extends React.Component {
            static contextTypes = {
                store: PropTypes.object
            }

            //在构造方法里面做一些处理将mapStateToProps处理过的数据返回给当前的组件，并一同当作属性传给Component组件
            constructor(props, context) {
                let state = this.context.store.getState();
                this.state = mapStateToProps(state);
            }

            //自动处理subscribe，在组件里面不需要再次执行
            componentDidMount = () => {
                this.context.store.subscribe(() => {
                    let state = this.context.store.getState();
                    this.setState = mapStateToProps(state);
                })
            }

            //渲染成新的组件
            render() {
                return <Component {...state} {...mapDispatchToProps(this.context.store.dispatch)}/>
            }
        }
    }
};

export {
    Provider,
    connect
}

/*
 *  connect(mapStateToProps,mapDispatchToProps)(VoteComponent)
 *
 */