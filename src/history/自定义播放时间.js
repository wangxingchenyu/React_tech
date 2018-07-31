import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Card, Row, Col, Icon, Avatar, Calendar, Badge, Carousel} from 'antd';


ReactDOM.render(
    <Carousel effect="fade" vertical autoplay autoplaySpeed={3}>
        <div>
            <h3>
                <img src="http://img30.360buyimg.com/jdwork/jfs/t20650/201/2438094502/549577/96ba9436/5b570fe7N2e93f445.jpg" alt=""/>
            </h3>
        </div>
        <div>
            <h3>
                <img src="http://img30.360buyimg.com/jdwork/jfs/t21520/158/2464314398/152585/733cbbeb/5b56a5e3N5f12307e.jpg" alt=""/>
            </h3>
        </div>
        <div>
            <h3>
                <img src="http://img30.360buyimg.com/jdwork/jfs/t20956/306/2291118632/867091/c30f0c2f/5b4f3fb6Nfdccc15b.jpg" alt=""/>
            </h3>
        </div>
    </Carousel>
    ,root);

registerServiceWorker();


/*
    ant-ui 蚂蚁金服 (React+Ant)
    Elment-ui  Vue+Element-UI开发 饿了么
 */


















