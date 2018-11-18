import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

/**
 *  受控组件，就是受组件自身的状态来管控
 */
class Zan extends Component {
    constructor(props, context) {
        super(props, context)
    }

    static  defaultProps = {
        title: "中国 vs 日本"
    }

    render() {
        let style = {marginTop: "20px"}
        let {title} = this.props
        return <div className='container' style={style}>
            <div className='card'>
                <div className='card-header'>

                    <h3 className='card-title text-center'>
                        {title}
                    </h3>
                </div>
                <div className='card-body'>
                    <div className='alert alert-success'>支持数: <span ref='support'>0</span></div>
                    <div className='alert alert-danger'>反对数 <span ref='against'>0</span></div>
                    <div className='alert alert-dark'>支持率: <span ref='rate'>0</span></div>
                </div>

                <div className='card-footer'>
                    <button className='btn btn-primary' onClick={this.support}>支持</button>
                    &nbsp;
                    &nbsp;
                    <button className='btn btn-danger' onClick={this.against}>反对</button>
                </div>

            </div>
        </div>
    }

    support = () => {
        // 支持+1
        // this.setState({support: this.state.support + 1})
        // 获取到support时面的内容
        let s = parseInt(this.refs.support.innerHTML);
        this.refs.support.innerHTML = s + 1
        this.rate()
    }

    against = () => {
        //  反对+1
        // this.setState({against: this.state.against + 1})
        let a = parseInt(this.refs.against.innerHTML);
        this.refs.against.innerHTML = a + 1
        this.rate()
    }

    rate = (flag) => {
        let rate = parseInt(this.refs.rate.innerHTML)
            let s = parseInt(this.refs.support.innerHTML);
            let a = parseInt(this.refs.against.innerHTML);
            rate = s / (s + a) * 100
            isNaN(rate) ? rate = 0 : null;
            this.refs.rate.innerHTML = rate.toFixed(2)+"%"
    }


}

render(<div>
    <Zan title={"美国 vs 阿根廷"}/>
    <Zan title={"中国 vs 马西"}/>
    <Zan title={"韩国 vs 朝鲜"}/>
</div>, root);






