import React, { useEffect, useState } from "react";
import "./OneMinGaming.css";

import { TwitterTweetEmbed } from "react-twitter-embed";

import {fetchTweets} from "../../services/twitter-api";
import Loader from "../Loader/Loader";

export default function OneMinGaming() {
const [currentTweet, setCurrentTweet] = useState("");

function hasMedia(tweet) {
    return tweet.attachments
}

async function getTweets() {
    const tweetResults = await fetchTweets();
    const currentVid = tweetResults.data.data.find(hasMedia);
    setCurrentTweet(currentVid.id);
}

useEffect(() => {
    getTweets();
  }, [])

    return (
        <div className="game-news">
            <h1>One Minute Gaming News</h1>
            {currentTweet ?
                <TwitterTweetEmbed
                    tweetId={currentTweet}
                />
            :
                <Loader />
            }
        </div>
    )
}
