import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   // 引入主方的
import '../index.css';
import {Card, Row, Col, Icon, Avatar, Calendar, Badge, Carousel, List, Spin, Button, message, Popover} from 'antd';


ReactDOM.render(
    <Popover placement="topLeft" title="标题" content="内容" trigger="hover">
        <Button>TL</Button>
    </Popover>
    , root);

registerServiceWorker();





















