import React, { Component } from "react";

export class PhotoModal extends Component {
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
                <div>
                    <button
                        onClick={(e) => {
                            this.onClose(e);
                        }}
                    >
                        X
                    </button>
                </div>
                <div>
                    <img src={this.props.src} />
                </div>
            </div>
        );
    }
}

export default PhotoModal;
