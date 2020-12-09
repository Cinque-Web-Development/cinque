const axios = require("axios");
const key = process.env.REACT_APP_NEWS_API_KEY;
const CORS = "https://kstick-cors-anywhere.herokuapp.com/"

export function fetchNews() {
    return axios.get(`${CORS}https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
    .catch((err) => console.log(err));
}