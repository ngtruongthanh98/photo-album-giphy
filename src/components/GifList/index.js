import React from "react";
import { fetchTrendingGifs } from "../../api/Fetch";
import GifItem from "../GifItem";

const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id} gif={image} />;
    });

    return <ul>{gifItems}</ul>;
};

export default GifList;
