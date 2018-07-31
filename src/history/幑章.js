import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Checkbox, Avatar, Badge} from 'antd';

ReactDOM.render(
    <div>
        <Badge count={25} />
        <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
        <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
    </div>,
    root);
registerServiceWorker();












