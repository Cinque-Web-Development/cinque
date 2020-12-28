import React, {useState, useEffect} from "react";
import "./Sports.css";

import Loader from "../Loader/Loader";
import ScoreCard from "./ScoreCard";
import {fetchSports} from "../../services/sports-api";

import nba from "../../Assets/nba.png";
import nfl from "../../Assets/nfl.png";
import mlb from "../../Assets/mlb.png";
import pga from "../../Assets/pga.png";

export default function Sports() {
    const [games, setGames] = useState();

    async function getGames(id) {
        const gamesResults = await fetchSports(id);
        setGames(gamesResults.data.events.slice(0,10));
    }

    useEffect(() => {
        getGames(4387)
    }, [])

    return (
        <div className="sports-comp">
            <nav className="sports-nav">
                <img className="nba logo" src={nba} alt="NBA Logo" onClick={(e) => getGames(4387)}/>
                <img className="nfl logo" src={nfl} alt="NFL Logo" onClick={(e) => getGames(4391)}/>
                <img className="mlb logo" src={mlb} alt="MLB Logo" onClick={(e) => getGames(4424)}/>
                <img className="pga logo" src={pga} alt="PGA Tour Logo" onClick={(e) => getGames(4425)}/>
            </nav>
            {games ? (
                <div>
                    {games[0].idLeague === "4425" ? (
                        <div className="scores">Golf</div>
                    ) : (
                        <div className="scores">
                            {games.map(g => {
                                return <ScoreCard 
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
