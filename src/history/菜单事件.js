import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Layout, Dropdown, Menu, Breadcrumb, Icon, Affix, Button, Alert, message} from 'antd';
import {HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';

const {SubMenu} = Menu; //解构menu菜单
const {Header, Footer, Content, Sider} = Layout;
const onClick = function ({ key }) {
    message.info(`Click on item ${key}`);
};

const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

ReactDOM.render(
    <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
            Hover me, Click menu item <Icon type="down" />
        </a>
    </Dropdown>,
    root);
registerServiceWorker();







