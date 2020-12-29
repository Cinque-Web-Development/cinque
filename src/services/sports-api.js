const axios = require("axios");
const CORS = "https://kstick-cors-anywhere.herokuapp.com/";

export function fetchSports(id) {
    return axios.get(`${CORS}https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${id}`)
    .catch((err) => console.log(err));
}