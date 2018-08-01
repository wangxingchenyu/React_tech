import React from 'react'
import ReactDOM from 'react-dom'
import Vote from "../components/Vote/Vote";
import 'bootstrap/dist/css/bootstrap.css'
let myRedux = (function anonymous() {
    let oriObj = {};
    let listenArray = [];

    function updateState(callback) {
        let newObj = callback(oriObj);
        oriObj = {...oriObj, ...newObj};
        listenArray.forEach(item => {
            if (typeof item === 'function') {
                item();
            }
        })
    }

    function getState() {
        return oriObj
    }

    function subscribe(fn) {
        listenArray.push(fn);
    }

    return {
        updateState,
        getState,
        subscribe
    }
})();


ReactDOM.render(
    <div><Vote title='给定的标题' myRedux={myRedux}/></div>, document.getElementById('root'));
