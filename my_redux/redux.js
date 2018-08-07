let createStore = (reducer) => {
    let state, listenArr = [];

    //封装dispatch，并主动执行一次
    function dispatch(action) {
        /*
         * 1)执行更新,当执行dispatch的时候才符触发reducer
         * 2) 将原来的reducer返回的结果覆盖现在的State
         */

        state = reducer(state, action);
        //并执行监听函数
        for (let i = 0; i <= listenArr.length; i++) {
            let item = listenArr[i];
            if (typeof item === "function") { //判断如果是一个函数，则让其执行
                item();
            } else {
                //如果不是函数，则给删除，但是为了不影响整体长度，需要对i进行--操作
                listenArr.splice(i, 1);
                i--;
            }
        }
    }

    dispatch({type: "_INIT_DEFAULT_STATE"});

    //获取容器里面的state数据
    function getState() {
        // 操作目的是重新封装成新的对象，让里面的对象，只能通过dispatch更改(堆内存的地址)
        let newState = JSON.parse(JSON.stringify(state));
        return newState;
    }

    function subscribe(fn) {
        !listenArr.includes(fn) ? listenArr.push(fn) : null;
        //其返回的结果是将这个订阅的函数给从listenArr里面去掉
        return function unsubscribe() {
            /**
             * 两种办法:一个是用Filter
             * 一个是用: splice
             */
            let index = listenArr.indexOf(fn);

            //从这个索引开始，删除一个
            listenArr.splice(index, 1);

            /**
             * @param  有可能导致数组的坍塌问题，做如下操作
             */

            //并给这个位置给一个占位，如果是null的话，在dispatch里面执行函数的时候进行判断 ，如果是函数，则执行，如果不是函数，则删除，并让i--
            listenArr[index] = null;

        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

let reducer = (state = {}, action) => {
    let {type} = action;
    switch (type) {
        /*根据dispatch分发过来的内容不同，进行不同的操作*/
    }
    return state;
}

//在创建createStore的时候，会将reducer传入进去，并且只有当执行Dispatch的时候，才会调用Reducer
createStore(reducer())

function combineReducers(reducers) {
    return function reducer(originState = {}, action) {
        let newState = {};
        for (key in reducers) {
            //如果不是自己的属性方法或者属性则终止
            if (!reducers.hasOwnProperty()) reteurn;
            newState[key] = reducers[key](originState[key], action)
        }
        return newState;
    }
}

let store = createStore(reducer);
store.dispatch({type: "add"});
let unscribe = store.subscribe();


