import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Checkbox, Avatar, Badge, Icon} from 'antd';

ReactDOM.render(
    <div>
        <Badge count={3}>
            阅读
        </Badge>
    </div>,
    root);
registerServiceWorker();












