import React, {Component} from 'react'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import PropTypes from 'prop-types'


export default class Vote extends Component {
    constructor(props, context) {
        super(props, context);
    }

    static defaultProps = {
        title: "defatult title",
        count: {
            n: 0,
            m: 0
        },
        myRedux: {}
    };

    render() {
        return (
            <div className='container' style={{marginBottom: "10px"}}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card bg-light text-dark'>
                            <Body/>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
