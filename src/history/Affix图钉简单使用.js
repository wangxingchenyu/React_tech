import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Layout, Menu, Breadcrumb, Icon, Affix, Button} from 'antd';

const {SubMenu} = Menu; //解构menu菜单
const {Header, Footer, Content, Sider} = Layout;


class Demo extends React.Component {
    state = {
        top: 10,
        bottom: 10,
    };

    render() {
        return (
            <div>
                <Affix offsetTop={this.state.top}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({
                                top: this.state.top + 10,
                            });
                        }}
                    >
                        Affix top
                    </Button>
                </Affix>
                <br/>
                <Affix offsetBottom={this.state.bottom}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({
                                bottom: this.state.bottom + 10,
                            });
                        }}
                    >
                        Affix bottom
                    </Button>
                </Affix>
            </div>
        );
    }
}

ReactDOM.render(
    <Demo/>,
    root);

registerServiceWorker();







