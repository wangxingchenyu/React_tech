import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Card} from 'antd';

ReactDOM.render(
    <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 800 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>,
    root);
registerServiceWorker();











