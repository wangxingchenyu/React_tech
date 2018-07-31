import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   // 引入主方的
import '../index.css';
import {Card, Row, Col, Icon, Avatar, Calendar, Badge, Carousel, List, Spin, Button} from 'antd';
import reqwest from 'reqwest';  // 异步请求

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: '地址 - http://ant.design',
        title: `标题 - ant design part ${i}`,
        avatar: '头像 - https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: '描述 - Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: '- 内容 - We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];

ReactDOM.render(
    <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
            <List.Item>
                <Card title={item.title}>Card content</Card>
            </List.Item>
        )}
    />,
    root);

registerServiceWorker();




















