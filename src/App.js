import "./App.css";
import GifList from "./components/GifList";

import React, { Component } from "react";

export class App extends Component {
    constructor() {
        super();

        this.state = {
            gifs: [
                {
                    id: 1,
                    url: "http://fakeimg.pl/300/",
                },
                {
                    id: 2,
                    url: "http://fakeimg.pl/300/",
                },
                {
                    id: 3,
                    url: "http://fakeimg.pl/300/",
                },
            ],
        };
    }

    handleTermChange(term) {
        console.log(term);
    }
    render() {
        return (
            <div className="App">
                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }
}

export default App;
