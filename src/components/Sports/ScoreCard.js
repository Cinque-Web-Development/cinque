import React from "react";


export default function ScoreCard({homeTeam, awayTeam, homeScore, awayScore, date}) {
    return (
        <div className="ScoreCard">
            <h2>{homeTeam}<br />vs<br />{awayTeam}</h2>
            <h4>{date}</h4>
            <h3>{homeScore} - {awayScore}</h3>
            <h4>Final</h4>
        </div>
    )
}
