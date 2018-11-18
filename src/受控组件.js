import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

/**
 *  受控组件，就是受组件自身的状态来管控
 */
class Zan extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            support: 0,
            against: 0,
            title: props.title
        }
    }

    static  defaultProps = {
        title: "中国 vs 日本"
    }

    render() {
        let style = {marginTop: "20px"}
        let {support, against, title} = this.state
        let rate = support / (support + against) * 100
        isNaN(rate) ? rate = 0 : null;
        return <div className='container' style={style}>
            <div className='card'>
                <div className='card-header'>

                    <h3 className='card-title text-center'>
                        {title}
                    </h3>
                </div>
                <div className='card-body'>
                    <div className='alert alert-success'>支持数:{support}</div>
                    <div className='alert alert-danger'>反对数{against}</div>
                    <div className='alert alert-dark'>支持率:{rate.toFixed(2) + "%"}</div>
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
        this.setState({support: this.state.support + 1})
    }

    against = () => {
        //  反对+1
        this.setState({against: this.state.against + 1})
    }
}

render(<div>
    <Zan title={"美国 vs 阿根廷"}/>
    <Zan title={"中国 vs 马西"}/>
    <Zan title={"韩国 vs 朝鲜"}/>
</div>, root);






