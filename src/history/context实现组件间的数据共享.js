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


