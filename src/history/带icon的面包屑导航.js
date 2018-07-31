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
            <Breadcrumb>
                <Breadcrumb.Item>  <Icon type="user" /> <a href="">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">一级</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">二级</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

ReactDOM.render(
    <Demo/>,
    root);

registerServiceWorker();







