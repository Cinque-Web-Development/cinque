import React from "react";


export default function ScoreCard({homeTeam, awayTeam, homeScore, awayScore, date}) {
    return (
        <div className="ScoreCard">
            <h1>{homeTeam} vs {awayTeam}</h1>
            <h3>{homeScore} - {awayScore}</h3>
            <h4>{date}</h4>
        </div>
    )
}
