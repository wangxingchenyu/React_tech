import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

class Vote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            s: 0,
            ns: 0
        }
    }

    static defaultProps = {title: "中国队 vs 巴西队"}

    render() {
        let {s, ns} = this.state
        let rate = (ns + s) === 0 ? "0%" : ((s / (s + ns) * 100).toFixed(2)) + "%";
        return (
            <div className='container'>
                <div className='card text-white' style={{marginBottom:"20px"}}>
                    <div className='card-header text-dark'>{this.props.title} 投票</div>
                    <div className='card-body'>
                        <div className='alert alert-success'> 支持: &nbsp; {s} </div>
                        <div className='alert alert-danger'> 反对: &nbsp; {ns}</div>
                        <div className='alert alert-dark'> 支持率: &nbsp; {rate} </div>
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
        switch (flag) {
            case "支持":
                this.setState({s: this.state.s + 1});
                break;
            case "反对":
                this.setState({ns: this.state.ns + 1});
                break;
        }
    }
}

ReactDOM.render(<div>
    <Vote title='法国队 vs 克罗地亚'/>
    <Vote title='中国队 vs 德国'/>
    <Vote title='日本 vs 乌拉硅'/>
</div>, root);