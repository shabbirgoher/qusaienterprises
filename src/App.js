import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import home from "./home.svg"
import setting from "./setting.svg"

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={home} />
                <img src={setting} />
                <h1> Hello, World!</h1>
            </div>
        );
    }
}

export default hot(module)(App);