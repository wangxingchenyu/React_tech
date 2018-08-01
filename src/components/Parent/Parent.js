import React, {Component} from 'react'
import Little from "./Little";
import Brother from "./Brother";
import 'bootstrap/dist/css/bootstrap.css'

export default class Parent extends Component {
    constructor(props, context) {
        super(props, context);
        let {title} = props;
        this.state = {
            title
        }
    }
    static defaultProps = {
        title: "默认的标题"
    };

    render() {
        let {title} = this.state;
        let style = {marginTop: "20px"};
        return (
            <div className='container' style={style}>
                <Little title={title} change={this.changeTitle}/>
                <hr/>
                <Brother abc={title}/>
            </div>
        )
    }
    changeTitle = (e) => {
        this.setState({title:"新的标题"});
    }
}

