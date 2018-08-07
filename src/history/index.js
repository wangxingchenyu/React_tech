import React from 'react'
import ReactDOM from 'react-dom'
import Vote from "../components/Vote/Vote";
import 'bootstrap/dist/css/bootstrap.css'
import store from "../store/index"
import {Provider} from "react-redux"

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Vote/>
        </Provider>
    </div>,
    root);


