import "./App.css";
import React, { Component } from "react";
import Trending from "./components/Trending";

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Trending />
            </div>
        );
    }
}

export default App;
