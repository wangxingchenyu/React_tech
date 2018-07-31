import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Layout,Menu,Breadcrumb} from 'antd';
const {Header, Footer,Content,Sider} = Layout;

ReactDOM.render(
    <div>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>

        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>

        <Layout>
            <Header>Header</Header>
            <Layout>
                <Content>Content</Content>
                <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>

        <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </div>,
    root);

registerServiceWorker();







