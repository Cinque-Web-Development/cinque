import React, {useState, useEffect} from "react";
import "./NavBar.css";
import axios from 'axios';


export default function NavBar() {
    const [date, setDate] = useState("")
    const [name, setName] = useState()
    

    useEffect(() => {
        const getHoliday = () => {
            axios.get(`https://calendarific.com/api/v2/holidays?api_key=095aa220667e3028d65999d32d50e9d18786c371&country=US&year=2020&type=national`)
        .then(response => {
            setDate(response.data.response.holidays[10].date.iso)
            setName(response.data.response.holidays[10].name)
        })
      
    }
    getHoliday();
    }, [])


  

    

    return (
        <div className="nav-bar">
            <div className="cinque-nav">
            <h1 className="cinque">Cinque</h1>
            </div>
            <div className="holiday">
                <h2>Next Holiday:</h2>
                <h1 className="holiday-display">{name}</h1>
                <h1 className="holiday-display">{date}</h1>
            </div>
        </div>
    )
}
