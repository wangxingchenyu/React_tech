
##  第1章： React基础
- •	开篇序
- •	脚手架基础应用
- •	脚手架高级应用
- •	jsx语法大括号用法
- •	jsx语法其它细节
- •	jsx语法的渲染流程
- •	jsx语法的渲染机制-createElement
- •	jsx语法的渲染机制-render
- •	jsx复杂结构的处理
- •	函数式组件基础语法
- •	函数式组件的渲染过程
- •	弹框实例
- •	回顾ES6类用法
- •	基于类的组件
- •	属性管理
- •	状态管理之了解数据驱动 
- •	点赞案例-数据驱动操作
- •	点赞案例-DOM操作
- •	手动实现数据的双向绑定
- •	生命周期
- •	留言板体验复杂组件间的数据传递
- •	手动配置webpack+react环境 

## 第2章： Redux应用
- •	redux初识
- •	手动实现简版redux 
- •	redux基本流程
- •	redux 工程化结构与使用场景 

## 第3章： React-Redux应用
- •	拆分文件
- •	引入react-redux 
- •	react-redux之todo
- •	todo1
- •	todo2
- •	todo3

## 第4章： React-Redux实现与路由与中间件的使用
- •	高阶组件及context用法
- •	实现react-redux 
- •	路由开始 
- •	路由 
- •	路由权限校验 
- •	中间件的使用
## 新添加的内容
#React 脚本架安装&注意点 
- vue-cli 
- create-react-app
- 都是基于npm node包管理工具来执行
- yarn add install 也都是可以的

## 脚手架安装注意点
- 如果用npm来装软件 ，想选择哪一个版本的话，则要用@符号
- pip == 来确定软件或者包的版本号
- 安装方法 (create-react-app 项目名[自定义]) 安装的时候我们用是的npm 但是在脚手架创建的时候，里面的包安装用的是yarn
    - 安装的时候错误一
    ```angular2html
      Could not create a project called "ONE" because of npm naming restrictions:
        *  name can no longer contain capital letters
    ```
    - 安装的时候错误二
    ```angular2html
      Could not create a project called "云知梦" because of npm naming restrictions:
        *  name can only contain URL-friendly characters
    ```
    - 可以用"_" 也可以用中划线"-"

- 学前必备知识
  - es6 ajax promise async await fetch axios 
  - 学习就是一环套一环的

#React脚本架目录详解
- node_modules  脚本架默认给安装的包
- public        存放的页面(单页应用SPA )
- src           主要的react编程目录，主入口文件是index.js      
- .gitingore    集中式的svn 采用分布式的 github git commit -a -m ""
- package.json  npm init 里面存放的是安装的开发与产品安装包与相关的script执行脚本的配置


   - 在create-react-app 项目名 在装的时候会将相关的包安装好，安装好的包放的路径就是在node_modules目录里面
   - 我们可以通过es6 里面的import 在src目录下面导入到index.js主入口文件里面去，也可以在主页面时面直接的引入
   - 建议引入的路径为绝对路径 在主页面里面要用%PUBLIC_URL% 来构建绝对路径

## 默认安装 
 - "react": "^16.4.1",
 - "react-dom": "^16.4.1",
 - "react-scripts": "1.1.4"  
 
## 默认安装的命令
- "start": "react-scripts start",
- "build": "react-scripts build",
- "eject": "react-scripts eject"  

## 脚手架
- webpack ,babel ,url-loader file-loader style-loader css-loader less,less-loader webpack-dev-server html-webpack-plugin

## React 脚手架调用的关系
-  "start": "react-scripts start", node_modules>.bin>react-scirpts>node xxx 
-  node_modules>react-scrpit>package.json 查看默认脚手架安装有webpac,等内容

## 渐进式   
  -  一个框架集成大部分的功能，但是也不能完全的适应每个项目的需要，所以要安装其它的包，用来丰富框架的整体功能
    
## 全家桶
  - 几乎包含了各项目所需要的或者所依赖的库
  reactDOM react react-router-dom redux React-redux axios 

## 安装包，需要来判断 ，是否需要更改webapck的配置，如果不需要的话，则直接在主文件时面import 就可以了
## entry output resolve moduls=[]

## 如果安装的包需要更改webpack的配置的话，则要将配置相关的文件暴露出来
- yarn eject  这个操作是不可逆的，只能执行一次，一旦暴露了，则不能隐藏
- 如果你已经在当前目录中用到github，需要先提交然后再暴露，然后再暴露出来
- 多出来两个目录，一个是scripts   一个是config

> config
> scripts

## config
- webpack.config.prod.js
- webpack.config.dev.js

## scripts
- build.js  打包的时候用到   webpack.config.prod.js
- start.js  开发的时候用到   webpack.config.dev.js
- 如果改变配置文件，则要同时修改开发与生产两个配置文件才行
    - 在开发环境下面配置
    ```angular2html
       {
                  test: /\.(css|less)$/,
                  use: [
                    require.resolve('style-loader'),
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                      },
                    },
                    {
                      loader: require.resolve('postcss-loader'),
                      options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                          require('postcss-flexbugs-fixes'),
                          autoprefixer({
                            browsers: [
                              '>1%',
                              'last 4 versions',
                              'Firefox ESR',
                              'not ie < 9', // React doesn't support IE8 anyway
                            ],
                            flexbox: 'no-2009',
                          }),
                        ],
                      },
                    },
                      {
                          loader: require.resolve('less-loader'),
                      },
                  ],
                },
    ```
- 环境变量的配置
 - 配置协议  set HTTPS=true&yarn start ps: true与&中间不能有空格
 - 配置端口
 - 配置域名
 
## 百度搜索框实例:
-  安装jsonp,并封装成promise
- 
```angular2html
import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import PropTypes from 'prop-types';
import JSONP from  'jsonp'

//封装jonsp为promise对象
function jsonp(url,opts={}) {
    return new Promise((resolve,reject)=>{
        JSONP(url,opts, (err,data)=> {
            if (err) reject(err);
            resolve(data);
        })
    })
}

class SearchCom extends Component{
    constructor(){
        super();
        this.state={
            val:"",
            arr:[],
            index:-1
        }
    }
    handleChange = async (e)=>{
        this.setState({val:e.target.value});
        let {s} = await  jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.state.val,{param:"cb"});
        this.setState({arr:s});
    }
    handleKeyUp= (e)=>{
        let keyCode = e.keyCode;
        if (keyCode === 38 || keyCode === 40) {
            if (keyCode === 38){
                this.setState({index:this.state.index-1})
                if (this.state.index<0){
                    this.setState({index:this.state.arr.length-1});
                }
                //根据上下键切换，则给表单时面赋不同的值
                e.target.value=this.state.arr[this.state.index+1];
                this.setState({val:e.target.value});
            } else {
                this.setState({index:this.state.index+1})
                if (this.state.index >= this.state.arr.length-1) {
                    this.setState({index:-1});
                }
                //根据上下键切换，则给表单时面赋不同的值
                e.target.value=this.state.arr[this.state.index+1];
                this.setState({val:e.target.value});
            }
        }
    }
    handleKeyDown= (e)=>{
        if (e.keyCode ===13){
            //https://www.baidu.com/s?wd=xxx  百度的查询接口
            window.open('https://www.baidu.com/s?wd=' + this.state.val, '_blank');
            this.refs.input.focus();
        }
    }
    componentDidMount(){
        //生命周期，在组件加载完成后，让input聚焦 (focus)
        this.refs.input.focus();
    }
    handleMouseEnter=(key,item,event)=>{
        this.setState({index:key,val:item});
        this.refs.input.value = item;
    }
    handleClick =()=>{
        window.open('https://www.baidu.com/s?wd=' + this.state.val, '_blank');
        this.refs.input.focus();
    }
    render(){
        let style ={marginTop:"20px"}
        return (
            <div className='container' style={style}>
                <input type="text" ref='input' defaultValue={this.state.val} onChange={this.handleChange} onKeyUp={this.handleKeyUp}  onKeyDown={this.handleKeyDown} className='form-control' placeholder='百度搜索框'/>
                <ul className='list-group'>
                    {this.state.arr.map((item,key)=>{
                        return  <li onClick={this.handleClick} onMouseEnter={(event)=>this.handleMouseEnter(key,item,event)} className={key===this.state.index ? 'list-group-item active' :"list-group-item"} key={key}>{item}</li>
                    })}
                </ul>
                <h2>{this.state.val}</h2>
            </div>
        )
    }
}

//简单的实现数据v-model实现   一定要用defaultValue  如果直接用value 则会将值写死，不会再改变了
render(<SearchCom/>, document.getElementById("root"))



``` 

##context上下文件传递 (props是只读的，但是context 里面的值是可以更改的,但在哪个组件里面调用更改，则生效在哪个组件里，不会更改父组件里面的值)

- 要提前在祖组件里声明好共享的数据类型

```
     static childContextTypes = {
            n: PropTypes.number,
            m: PropTypes.number,
            callback: PropTypes.func
        };
```

- 然后设置要分享的值，反回是一个对象 getChildContext()这个函数用来反回，是固定写法，函数的名称不能改变
```angular2html

getChildContext() {
        let {n, m} = this.state;
        return {
            n,
            m,
            callback: this.add
        }
    }
```

- 如果想在子组件里面调用的话，则是由子组件自己主动发起，先声明好数据的类型 contextTypes 固定的写法，不能变,需要调用哪个就写哪个就可
    - 1) 数据的类型必须是跟父组件里面共享的数据类型一致，否则报错
    - 2) 如果想在 constructor 里面用，要给constructor,传入props,context super(props,context)
    
```
  static contextTypes = {
        n: PropTypes.number,
        m: PropTypes.number
    };
```


## 传递的两种试
- props
- context
    -  如果父传子 ,则要通过父主动通过props来分配，或者是 父已经全局分配好的getChildContext内容，由子孙来调用
    -  如果子想更改父，将父更改State 的方法作为属性传递给子就可以了，而context 是可以通过调用 state里面值来取的

## 组件也可以通过 React.createContext（）方式来创建
-  也了解生产者与消费者模型
-  父组件来生产，而子组件来消费
-  所以这个方法解构出来 **两个组件** 分别是 Provider(生产者：可以通过其value属性来提供上下文的数据) Customer(消费者)
-  createContext里面传一个对象，用来提供上下文的数据 ，这个数据是默认的数据 如果生产者(Provider) 里面提供了，则不找Default上下文件的数据
-  子组件如果想调用的话，不需要像以前一样声明类型，直接用 Customer 组件包括就可以了 里面返回是一个函数，参数是context
> 如下:
```
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        background: 'black',
        color: "#fff"
    },
};

const {Provider, Consumer} = React.createContext({
    background: 'black',
    color: "#fff"
});

//里面是默认提供者提供值 ，如果
/*
 *如果父组件提供了provider 则子组件就用其它祖组件的provider，否则在话，用的是React.createContext里面默认的provider
 */
class App extends React.Component {
    render() {
        return (
            <div>
                <Provider value={{color: "yellow", background: "#000"}}>
                    <Header/>
                </Provider>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <Title>Hello React Context API</Title>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <Consumer>
            {context => (
            <h1 style={{background: context.background, color: context.color}}>
                {this.props.children}
            </h1>
        )}
    </Consumer>
        );
    }
}

ReactDOM.render(
    <App/>,
    root
);

```
## Promise实例
```
async function  one() {
    return  "hello world";
}

console.log(one()); 
//是一个promise对象

```
- 实例二
```
async function one() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("成功了");
        },3000);
        console.log("是否等待");
    })
}

//这里面声明函数,成功的话，则执行then,调用的时候调用resolve，否则执行reject async,await两个成又出现，一起使用
async function two() {
    await one().then((val)=>console.log(val));
}

two();
```
### 手动实现Redux
- 声明一个store用来存储,返回一个自执行的函数，该函数返回的是一个对象，对象里面再执行相关的操作
- 1)声明一个原数据对象 obj 2)声明一个事件方法的数组 3)subscribe用来将新的事情放到事件数组里面
- getState() 用来返回最终的数据 
- dispatch , getState, subscribe
- dispatch({}) 参数传递过来一个对象,里面有type的key 用来判断是哪个操作执行的

```
let store = (function niming() {
    let obj = {n: 0, m: 0};
    let eventListenArr = [];

    function dispatch(action) {
        switch (action.type) {
            case "VOTE_SUPPORT":
                obj = {...obj, n: obj.n + 1};
                break;
            case "VOTE_AGINST":
                obj = {...obj, m: obj.m + 1};
                break
        }
        eventListenArr.forEach(item => {
            if (typeof item === 'function') {
                item();
            }
        })
    }

    function getState() {
        return obj;
    }

    function subscribe(fn) {
        //如果事件监听数组里面不包含提交的事情，则加入进去
        if (!eventListenArr.includes(fn)) {
            eventListenArr.push(fn);
        }
    }

    return {
        getState,
        subscribe,
        dispatch,
    }
})();
```
### 事件操作(dispatch)
```
render() {
        return (
            <div className='card-footer'>
                <button className='btn btn-success' onClick={(e) => {
                    console.log("执行支持");
                    this.props.store.dispatch({
                        type: "VOTE_SUPPORT"
                    })
                }}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={(e) => {
                    console.log("执行反对");
                    this.props.store.dispatch({
                        type: "VOTE_AGINST"
                    });
                }}>反对
                </button>
            </div>
        )
    }
```

### 数据获取与订阅与重新render
```
render() {
        console.log("执行了渲染");
        let {n = 0, m = 0} = this.props.store.getState(), rate = n / (n + m) * 100;
        isNaN(rate) ? rate = 0 : null;
        console.log(n, m);
        return (
            <div className='card-body'>
                <div className='alert alert-success'>支持:{n}</div>
                <div className='alert alert-danger'>反对:{m}</div>
                <div className='alert alert-dark'>支持率:{rate.toFixed(2) + "%"}</div>
            </div>
        )
    }
```

## redux流程
- 安装  yarn add redux react-redux
> 声明: 
> - redux要执行状态管理，不是随意的更改，需要有一个Reducer作为管理员来看有哪些action可以执行，如果判断出来了，则可以正常的执行
> - 状态存储在createStore里面,里面放一个Reducer 它是一个函数，正常有两个参数，第一个是状态，第二个是动作，他是一个对象，在动作执行dispatch()的时候要送一个对象，里面有type属性用来标记动作名称
> - 动作是dispatch()里面传一个对象{type:"""}
> - 订阅sbuscripe(),里面是一个回调函数，用来改列setState，更改的内容无关，重要是通过this.setState()再次触发render渲染
> - 这个订阅的函数会加到redux 监听对象数组里，在createStore里面的状态更改后，会立即解决订阅函数，再次执行render

### 声明
```
import {createStore} from "redux"

//赋一个默认的State值 ，后面传一个Action，里面传一个对象，对象里面有一个type属性
let reducer = (state = {n: 0, m: 0}, action) => {
    switch (action.type) {
        case "VOTE_SUPPORT":
            console.log('support');
            state = {...state, n: state.n + 1};
            console.log(state);
            break;
        case 'VOTE_AGINST':
            console.log("againgst");
            state = {...state, m: state.m + 1};
            console.log(state);
            break;
    }

    //必须反回一个新的state来覆盖原来的state
    return state;
};

let store = createStore(reducer);
```


### 执行获取内容，并且发布订阅
```react
  console.log("执行了渲染");
         let {n = 0, m = 0} = this.props.store.getState(), rate = n / (n + m) * 100;
         isNaN(rate) ? rate = 0 : null;
         console.log(n, m);
         return (
             <div className='card-body'>
                 <div className='alert alert-success'>支持:{n}</div>
                 <div className='alert alert-danger'>反对:{m}</div>
                 <div className='alert alert-dark'>支持率:{rate.toFixed(2) + "%"}</div>
             </div>
         )
     } 
  componentDidMount() {
        this.props.store.subscribe(() => {
            console.log("执行了Did");
            this.setState({refresh: !this.state.refresh});  //this.setState()会自动触发render
        })
    }
```

### 执行dispatch

```
  <div className='card-footer'>
                <button className='btn btn-success' onClick={(e) => {
                    console.log("执行支持");
                    this.props.store.dispatch({
                        type: "VOTE_SUPPORT"
                    })
                }}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={(e) => {
                    console.log("执行反对");
                    this.props.store.dispatch({
                        type: "VOTE_AGINST"
                    });
                }}>反对
                </button>
            </div>
```

## Redux工程化结构 
- 通常情况下，会在 src 目录时面建立 一个 store 目录
- store 里面有actions reducer index.js action-types.js
- index.js 返回一个store
```
store
|- action
|  | -vote.js
|  | -personal.js
|  | - index.js
|- reducer
|  | -vote.js
|  | -personal.js
|  | - index.js
|- index.js
|- action-type.js
```
> index.js
```
import {createStore} from "redux"
import reducer from "./reducer/index"

/**
 * 将reducer拆分到reducer目录里面
 */
let store = createStore(reducer);
export default store;
```

> action-types
```
/**
 * 设票组件
 * @type {string}
 */
export const VOTE_SUPPORT = 'VOTE_SUPPORT';
export const VOTE_AGINST = 'VOTE_AGINST';

/**
 * 个人中心
 */

export const PERSONAL = 'PERSONAL'
```
> reducer
 >> reduder 下面的vote.js
```
    import * as TYPES from "../action-types"
    
    export default function vote(state = {n: 0, m: 0}, action) {
        switch (action.type) {
            case TYPES.VOTE_SUPPORT:
                console.log(111);
                state = {...state, n: state.n + 1};
                break;
            case TYPES.VOTE_AGINST:
                console.log(22);
                state = {...state, m: state.m + 1};
                break;
        }
        console.log(state);
        return state;
    }
```

 > reducer
  >> reduder 下面的personal.js
```
import * as TYPES from "../action-types"

export default function personal(state = {
    personalInfo: {}
}, action) {
    return state;
}

```
> Reducer index.js
```
import {combineReducers} from "redux"  合并两个reducer
import personal from "./personal"
import vote from "./Vote"

let reducer = combineReducers({
    personal,
    vote
});

export default reducer;

```
> action
   > action 下面的 vote
```
import * as TYPES from "../action-types"

let vote={
   support(){
       return{type:TYPES.VOTE_SUPPORT}
   } ,
    against(){
       return {type:TYPES.VOTE_AGINST}
    }
};

export default vote;
```

> action
   > action 下面的 personal
```
import * as TYPES from "../action-types"

let personal ={};

export default personal;
```
   
> action
   > action 下面的 index
```
import vote from "./voteAction"
import personal from "./personalAction"

let actions = {vote, personal};

export default actions;
```   

> ps 在调取数据的时候，this.props.store.getState()返回的一对象，因为我们reduce合并了两个vote,person
> 所以在调用的时候是 再找下面 this.props.store.getState().vote
> 在dispatch()的时候，首先引入 import action from "../../store/action/index"
```
 render() {
        return (
            <div className='card-footer'>
                <button className='btn btn-success' onClick={(e) => {
                    console.log("执行支持");
                    this.props.store.dispatch(action.vote.support());
                }}>支持
                </button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={(e) => {
                    console.log("执行反对");
                    this.props.store.dispatch(action.vote.against());
                }}>反对
                </button>
            </div>
        )
```

