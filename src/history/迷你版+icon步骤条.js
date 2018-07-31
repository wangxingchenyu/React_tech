import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Layout, Dropdown, Menu, Breadcrumb, Icon, Affix, Button, Alert, message,Steps} from 'antd';
import {HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';

const {Header, Footer, Content, Sider} = Layout;
const Step = Steps.Step;

ReactDOM.render(
    <Steps>
        <Step status="finish" title="Login" icon={<Icon type="user" />} />
        <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
        <Step status="process" title="Pay" icon={<Icon type="loading" />} />
        <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
    </Steps>,
    root);
registerServiceWorker();







