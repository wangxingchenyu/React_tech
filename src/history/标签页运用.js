import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Card, Row, Col} from 'antd';

let {Meta} = Card;

const tabList = [
    {key: 'tab1', tab: '第一页',},
    {key: 'tab2', tab: '第二页',}   //key 表示关联下面content的内容，名称要与Content的key操持一致,Tab表示显示的名称
];

const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};

class TabsCard extends React.Component {
    state = {
        key: 'tab1',
    };
    onTabChange = (key) => {
        this.setState({key: key});
    };

    render() {
        return (
            <div>
                <Card style={{width: '100%'}} title="区块划分" extra={<a href="#">More</a>} tabList={tabList}
                      onTabChange={(key) => {
                          this.onTabChange(key);
                      }}>
                    {contentList[this.state.key]}
                </Card>
            </div>
        );
    }
}

ReactDOM.render(
    <TabsCard/>,
    root);

registerServiceWorker();


/*
  Vue+Element-ui
  React+Antd
  Layui
  Bootstrap4  适合普通的网站构建 ，如果大型的网站还是要自己来写
 */

















