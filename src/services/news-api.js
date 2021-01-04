const axios = require("axios");
const key = process.env.REACT_APP_NEWS_API_KEY;
const CORS = "https://kstick-cors-anywhere.herokuapp.com/"
const options = {
    headers: { "x-api-key": key }
};

export function fetchNews() {
    return axios.get(`${CORS}api.datanews.io/v1/headlines?country=us&sortBy=date`, options)
    .catch((err) => console.log(err));
}