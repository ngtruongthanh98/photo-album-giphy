import React, { Component } from "react";
import "./style.css";
import PhotoModal from "../PhotoModal";

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
            show: false,
        };
    }

    loadMore = () => {
        this.setState((prev) => {
            return { visible: prev.visible + 12 };
        });
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
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
                                    <React.Fragment>
                                        <a
                                            className="gif-item"
                                            target="new"
                                            onClick={this.showModal}
                                            key={index}
                                        >
                                            <img
                                                src={item.images.original.url}
                                            />
                                        </a>

                                        <PhotoModal
                                            onClose={this.hideModal}
                                            show={this.state.show}
                                            src={item.images.original.url}
                                        />
                                    </React.Fragment>
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
