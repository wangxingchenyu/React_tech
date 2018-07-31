import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Layout, Dropdown, Menu, Breadcrumb, Icon, Affix, Button, Alert} from 'antd';
import {HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';

const {SubMenu} = Menu; //解构menu菜单
const {Header, Footer, Content, Sider} = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
    </Menu>
);
/*

第一步：引入Drowpdown+Menu组件
第二步：在Dropdown组件下面引入Menu组件

 */
ReactDOM.render(
    <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="down" />
        </a>
    </Dropdown>,
    root);

registerServiceWorker();







