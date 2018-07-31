import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Button, Radio,Icon} from 'antd'    //引入组件

let size=100;
ReactDOM.render(
    <div>
        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
            <Button type="primary" ghost>Primary</Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost disabled>Dashed</Button>
            <Button type="danger" ghost>danger</Button>
            <hr/>
            <h3>加载按扭</h3>
            <Button type="primary" loading='true'>
                Click me!
            </Button>
            <hr/>
            <Button type="primary">
                <Icon type="left" />Go back
            </Button>
            <Button type="primary">
                Go forward<Icon type="right" />
            </Button>
        </div>,
    </div>, root);

registerServiceWorker();






