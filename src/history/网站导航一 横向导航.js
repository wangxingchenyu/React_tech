import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Layout, Dropdown, Menu, Breadcrumb, Icon, Affix, Button, Alert, message} from 'antd';
import {HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';

const {Header, Footer, Content, Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        console.log(this.state.current);
    };
    
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail"><Icon type="mail"/>Navigation One</Menu.Item>

                <Menu.Item key="app" disabled><Icon type="appstore"/>Navigation Two</Menu.Item>

                <SubMenu title={<span><Icon type="setting"/>Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </Menu.Item>

            </Menu>
        );
    }
}

ReactDOM.render(<App/>, root);
registerServiceWorker();







