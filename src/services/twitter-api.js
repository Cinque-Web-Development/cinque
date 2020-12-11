const axios = require("axios");
const CORS = "https://kstick-cors-anywhere.herokuapp.com/";
const options = {
    headers: { "Bearer": process.env.REACT_APP_TWITTER_BEARER_TOKEN }
}

export function fetchTweets() {
    return axios.get(`${CORS}https://api.twitter.com/2/tweets/search/recent?query=from:OneMinGameNews&tweet.fields=created_at,attachments&expansions=author_id&media.fields=media_key&user.fields=description`, options)
    .catch((err) => console.log(err));
}