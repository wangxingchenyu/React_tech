import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

class Vote extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {title: "中国队 vs 巴西队"}

    render() {
        return (
            <div className='container'>
                <div className='card text-white' style={{marginBottom: "20px"}}>
                    <div className='card-header text-dark'>{this.props.title} 投票</div>
                    <div className='card-body'>
                        <div className='alert alert-success'> 支持: <span ref='support'>0</span></div>
                        <div className='alert alert-danger'> 反对: <span ref='aginst'>0</span></div>
                        <div className='alert alert-dark'> 支持率: <span ref='supportRate'>0</span>%</div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-primary' onClick={(e) => {
                            this.handClick("支持", e)
                        }}>支持
                        </button>
                        &nbsp;
                        <button className='btn btn-danger' onClick={(e) => this.handClick("反对", e)}>反对
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    handClick(flag, event) {
        let {support, aginst} = this.refs;
        switch (flag) {
            case  '支持':
                support.innerHTML++;
                break;
            case "反对":
                aginst.innerHTML++;
                break;
        }
    }

    computed = () => {
        let {support, aginst, rate} = this.refs

    }
}

ReactDOM.render(<div>
    <Vote title='法国队 vs 克罗地亚'/>
    <Vote title='中国队 vs 德国'/>
    <Vote title='日本 vs 乌拉硅'/>
</div>, root);