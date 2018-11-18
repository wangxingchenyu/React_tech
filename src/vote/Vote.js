import React, {Component} from 'react'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


export default class Vote extends Component {
    constructor() {
        super();
    }

    render() {
        let {store} = this.props;
        return (
            <div className='container' style={{marginTop: "20px"}}>
                <div className='card'>
                    <Header title={this.props.title}/>
                    <Body/>
                    <Footer />
                </div>
            </div>
        )
    }
}