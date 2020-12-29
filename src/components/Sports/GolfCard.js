import React from 'react'

export default function GolfCard({tourney, date, city, result}) {
    return (
        <div>
            <div className="golf-card">
               <h2>{tourney}</h2> 
               <h3>{city}</h3>
               <h3>{date}</h3>
               <h3>Winner: {result}</h3>
            </div>
        </div>
    )
}
