import React from 'react'
import ReactDOM from 'react-dom'
import Vote from "../components/Vote/Vote";
import 'bootstrap/dist/css/bootstrap.css'
import store from "../store/index"

ReactDOM.render(<div><Vote title='给定的标题' store={store}/></div>, root);

