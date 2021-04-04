import React, { Component } from "react";

const URL = "http://api.giphy.com/v1/gifs/";
const KEY = "T1lALmAvvtv7RJZ96ky23GnTXuhbHyuS";

export class Trending extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            visible: 12,
            error: false,
            loader: true,
        };
    }

    loadMore = () => {
        this.setState((prev) => {
            return { visible: prev.visible + 12 };
        });
    };

    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${KEY}`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.data,
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    error: true,
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="packageTrending">
                    <h1>Giphy Trending</h1>
                    <div className="gif-list">
                        {this.state.items
                            .slice(0, this.state.visible)
                            .map((item, index) => {
                                return (
                                    <a
                                        className="gif-item"
                                        href={item.url}
                                        target="new"
                                        key={item.id}
                                    >
                                        <img src={item.images.original.url} />
                                    </a>
                                );
                            })}
                    </div>
                    {this.state.visible < this.state.items.length && (
                        <div className="container__LoadMore">
                            <button
                                onClick={this.loadMore}
                                type="button"
                                className="loadMoreBtn"
                            >
                                Load more
                            </button>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Trending;
