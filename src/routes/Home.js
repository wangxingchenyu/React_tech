import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter, BrowserRouter, Route, NavLink, Link, Redirect} from 'react-router-dom'
import {DatePicker, LocaleProvider, Icon, Button, Calendar} from 'antd'
import '../static/css/antd.less'
import zh_ch from 'antd/lib/locale-provider/zh_CN'
import actions from '../store/action'

// import 'moment/src/locale/zh-cn'

class Home extends Component {
    constructor(props, context) {
        super();
        console.log(this.props);
        this.state = {
            loading: false
        }
    }

    render() {
        //汉化先要引入LocaleProvide local属性指向语言
        return (
            <LocaleProvider locale={zh_ch}>
                <Button type='danger' loading={this.state.loading} onClick={() => {
                    this.setState({loading: true});
                    setTimeout(() => {
                        this.setState({loading: false});
                    }, 3000)
                }}>危险</Button>
            </LocaleProvider>
        )
    }
}


export default connect()(Home)