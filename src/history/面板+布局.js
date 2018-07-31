import React, {Component} from 'react';  //React核心组件，用来创建虚拟DOM
import ReactDOM, {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.less'   //引入主方的
import '../index.css';
import {Card, Row, Col} from 'antd';

let {Meta} = Card;
ReactDOM.render(
    <div style={{ background: '#ECECEC', padding: '30px' }}>
        {/*代表面col之间的缝隙*/}
        <Row gutter={10}>
            <Col span={8}>
                <Card title="初步理解JWT并实践使用" bordered={false}>
                    JWT是一种用于双方之间传递安全信息的简洁的、URL安全的表述性声明规范。JWT作为一个开放的标准（RFC 7519），定义了一种简洁的，自包含的方法用于通信双方之间以Json对象的形式安全的传递信息。因为数字签名的存在，这些信息是可信的，JWT可以使用HMAC算法或者是RSA的公私秘钥对进行签名。简洁(Compact): 可以通过URL，POST参数或者在HTTP header发送，因为数据量小，传输速度也很快 自包含(Self-contained)：负载中包含了所有用户所需要的信息，避免了多次查询数据库
                </Card>
            </Col>
            <Col span={8}>
                <Card title="初步理解JWT并实践使用" bordered={false}>
                    JWT是一种用于双方之间传递安全信息的简洁的、URL安全的表述性声明规范。JWT作为一个开放的标准（RFC 7519），定义了一种简洁的，自包含的方法用于通信双方之间以Json对象的形式安全的传递信息。因为数字签名的存在，这些信息是可信的，JWT可以使用HMAC算法或者是RSA的公私秘钥对进行签名。简洁(Compact): 可以通过URL，POST参数或者在HTTP header发送，因为数据量小，传输速度也很快 自包含(Self-contained)：负载中包含了所有用户所需要的信息，避免了多次查询数据库
                </Card>
            </Col>
            <Col span={8}>
                <Card title="初步理解JWT并实践使用" bordered={false}>
                    JWT是一种用于双方之间传递安全信息的简洁的、URL安全的表述性声明规范。JWT作为一个开放的标准（RFC 7519），定义了一种简洁的，自包含的方法用于通信双方之间以Json对象的形式安全的传递信息。因为数字签名的存在，这些信息是可信的，JWT可以使用HMAC算法或者是RSA的公私秘钥对进行签名。简洁(Compact): 可以通过URL，POST参数或者在HTTP header发送，因为数据量小，传输速度也很快 自包含(Self-contained)：负载中包含了所有用户所需要的信息，避免了多次查询数据库
                </Card>
            </Col>
        </Row>
    </div>,
    root);

registerServiceWorker();


















