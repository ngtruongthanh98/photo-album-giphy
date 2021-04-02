import axios from "axios";

export const fetchTrendingGifs = async () => {
    const { data } = await axios.get(process.env.REACT_APP_API_URL, {
        params: {
            limit: 12,
            api_key: process.env.REACT_APP_API_KEY,
        },
    });

    return data;
};
