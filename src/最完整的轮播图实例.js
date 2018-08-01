import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.less'

let source = [];

for (let i = 1; i <= 5; i++) {
    source.push(require(`./static/images/${i}.jpg`))
}

class Swiper extends Component {
    constructor(props) {
        super(props)
        let {step, speed} = this.props
        this.state = {
            step: step,
            speed: speed
        }
    }

    //属性验证
    static propTypes = {
        interval: PropTypes.number,
        step: PropTypes.number,
        sourceDate: PropTypes.array,
        speed: PropTypes.number
    }

    componentWillMount() {
        //将第一张图片放到最后，将最后一张图片放到第一张
        let {sourceDate} = this.props
        let cloneDate = sourceDate.slice(0);
        cloneDate.push(sourceDate[0]);
        cloneDate.unshift(sourceDate[sourceDate.length - 1]);
        this.cloneDate = cloneDate; //将数据放到实例上去
    }

    //在页面渲染完成后，然后再执行状态切换，状态改变，页面改变
    componentDidMount() {
        this.imageMove();
    }

    //执行状态修改
    imageMove = () => {
        let {interval} = this.props;
        this.timer = setInterval(() => {
            this.setState({step: this.state.step + 1});
        }, interval);
    }

    //确认要不要其状态更新
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    //边界判断
    componentWillUpdate(nextProps, nextState) {
        let {step, speed} = nextState;
        // 右边界处理
        if (step > this.cloneDate.length - 1) {
            this.setState({
                step: 1,
                speed: 0
            })
        }

        //左边界处理
        if (step < 0) {
            this.setState({
                step: this.cloneDate.length - 2,
                speed: 0
            })
        }

    }

    componentDidUpdate(nextProps, nextState) {
        let {step, speed} = this.state;
        // 修改完成后，右边界处理
        if (step === 1 && speed === 0) {
            let delayTimer = setTimeout(() => {
                clearTimeout(delayTimer);
                this.setState({
                    step: step + 1,
                    speed: this.props.speed
                })
            })
        }

        //修改完成后，左边界处理
        if (step === this.cloneDate.length - 2 && speed === 0) {
            let {step, speed} = this.state;
            let delayTimer = setTimeout(() => {
                clearTimeout(delayTimer);
                this.setState({
                    step: step - 1,
                    speed: this.props.speed
                })
            })
        }
    }

    render() {
        console.log("渲染")
        let {cloneDate} = this
        let {step, speed} = this.state
        let style = {
            width: 1000 * cloneDate.length,
            left: -1000 * step + "px",
            transition: `left ${speed}ms linear 0ms`
        }  //定义ul的宽度
        let {sourceDate} = this.props
        return (
            <div className='container' onMouseEnter={this.hover} onMouseLeave={this.leave}>
                <ul style={style}>
                    {
                        cloneDate.map((item, index) => (
                            <li key={index}><img src={item} width='100%' alt={index} height='100%'/></li>
                        ))
                    }
                </ul>
                <div className='focus'>
                    {
                        //选中哪一个未处理,默认的情况下，索引是step-1 再后进行step尾部与头部判断
                        sourceDate.map((item, index) => {
                            let temIndex = step - 1;
                            //如果是step是尾部
                            step === (cloneDate.length - 1) ? temIndex = 0 : null;
                            //如果是头部的
                            step === 0 ? temIndex = sourceDate.length - 1 : null;
                            return <span key={index} className={index === temIndex ? 'active' : ''}
                                         onClick={this.foucuClick.bind(this, index)}></span>
                        })
                    }
                </div>
                <div className='arrow'>
                    <a href="javascript:" className='arrowLeft' onClick={this.arrowLeft}></a>
                    <a href="javascript:" className='arrowRight' onClick={this.arrowRight}></a>
                </div>
            </div>
        )
    }

    //鼠标悬停的时候，去掉停时
    hover = (e) => {
        clearInterval(this.timer);
    }

    //鼠标离开的时候，再次执行定时更改状态
    leave = (e) => {
        this.imageMove();
    }

    foucuClick(index) {
        this.setState({step: index + 1});
    }

    arrowLeft = (e) => {
        this.setState({step: this.state.step - 1});
    }

    arrowRight = (e) => {
        this.setState({step: this.state.step + 1});
    }
}

/**
 * 传几个动态的值，一个是sourceDate 是图片数据
 * interval 定义轮播间隔的时间
 * step 定义从第几张图开始
 * speed 定义图片切换动画时间
 */

ReactDOM.render(<div><Swiper sourceDate={source} interval={3000} step={1} speed={300}/></div>, root);
