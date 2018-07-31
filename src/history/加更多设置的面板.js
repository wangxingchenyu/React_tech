import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Card, Row, Col, Icon, Avatar} from 'antd';

let {Meta} = Card;

//加上actions 来操作
ReactDOM.render(
    <Card
        style={{width: 300}}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
        actions={[<Icon type="setting"/>, <Icon type="edit"/>, <Icon type="ellipsis"/>]}
    >
        <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
            title="Card title"
            description="This is the description"
        />
    </Card>,
    root);

registerServiceWorker();


/*
  Vue+Element-ui
  React+Antd
  Layui
  Bootstrap4  适合普通的网站构建 ，如果大型的网站还是要自己来写
 */

















