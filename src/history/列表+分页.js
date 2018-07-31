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

ReactDOM.render(
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 2,
        }}
        dataSource={listData}
        renderItem={item => (
            <List.Item
                key={item.title}
                actions={
                    [
                        <IconText type="star-o" text="156"/>,
                        <IconText type="like-o" text="156"/>,
                        <IconText type="message" text="2"/>
                    ]
                }
                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
            >
                <List.Item.Meta avatar={<Avatar src={item.avatar}/>} title={<a href={item.href}>{item.title}</a>} description={item.description}/>
                {item.content}
            </List.Item>
        )}
    />,
    root);

registerServiceWorker();




















