import React, {useState, useEffect} from "react";
import "./Sports.css";

import Loader from "../Loader/Loader";
import ScoreCard from "./ScoreCard";
import GolfCard from './GolfCard';
import {fetchSports} from "../../services/sports-api";


import nba from "../../Assets/nba.png";
import nfl from "../../Assets/nfl.png";
import mlb from "../../Assets/mlb.png";
import pga from "../../Assets/pga.png";

export default function Sports() {
    const [games, setGames] = useState();
    const [logoElements, setLogoElements] = useState([])

    async function getGames(e, id) {
        const gamesResults = await fetchSports(id);
        setGames(gamesResults.data.events);
        if (e) {
            for (let i = 0; i < logoElements.length; i++) {
                if (logoElements[i].classList.contains("current")) {
                    logoElements[i].classList.remove("current")
            }}
            e.target.classList.add("current");
        }
    }

    function getLogoEls() {
        const logos = document.getElementsByClassName("logo");
        setLogoElements(logos);
    }

    useEffect(() => {
        getGames("", 4387);
        getLogoEls();
    }, [])

    return (
        <div className="sports-comp">
            <nav className="sports-nav">
                <img className="nba logo current" src={nba} alt="NBA Logo" onClick={(e) => getGames(e, 4387)}/>
                <img className="nfl logo" src={nfl} alt="NFL Logo" onClick={(e) => getGames(e, 4391)}/>
                <img className="mlb logo" src={mlb} alt="MLB Logo" onClick={(e) => getGames(e, 4424)}/>
                <img className="pga logo" src={pga} alt="PGA Tour Logo" onClick={(e) => getGames(e, 4425)}/>
            </nav>
            {games ? (
                <div>
                    {games[0].idLeague === "4425" ? (
                        <div className="scores">
                            {games.map((g, idx) => {
                                return <GolfCard 
                                        key={idx}
                                        tourney={g.strEvent}
                                        date={g.dateEvent}
                                        city={g.strCity}
                                        result={g.strResult.slice(87,130)}
                                        />
                            })}
                        </div>
                    ) : (
                        <div className="scores">
                            {games.map((g, idx) => {
                                return <ScoreCard 
                                        key={idx}
                                        homeTeam={g.strHomeTeam} 
                                        awayTeam={g.strAwayTeam} 
                                        homeScore={g.intHomeScore}
                                        awayScore={g.intAwayScore}
                                        date={g.dateEvent}
                                        />
                            })}
                        </div>
                    )}
                </div>

            ) : (
                <Loader />
            )}
            <div className="line"></div>
        </div>
    )
}
