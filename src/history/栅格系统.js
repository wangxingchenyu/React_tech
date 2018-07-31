import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Row, Icon, Col} from 'antd'    //引入组件
import '../index.less'

let size = 100;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
ReactDOM.render(
    <div>
        <Row>
            <Col span={12} className="gutter-row">一半</Col>
            <Col span={12} className="gutter-row">一半</Col>
        </Row>
        <hr/>
        <Row>
            <Col span={8} offset={8} className='row-color'>中间内容</Col>
        </Row>
        <hr/>
        <Row>
            <Col span={18} push={6} style={{background:"yellow"}}>col-18 col-push-6</Col>
            <Col span={6} pull={18}>col-6 col-pull-18</Col>
        </Row>
        <hr/>
        <Row type="flex" justify="end">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>
        <p>Align Top</p>
        <Row type="flex" justify="center" align="top">
            <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
            <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
        </Row>
    </div>, root);

registerServiceWorker();







