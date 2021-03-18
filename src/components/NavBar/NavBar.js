import React, {useState, useEffect} from "react";
import "./NavBar.css";
import axios from 'axios';

function getNextHoliday(holiday) {
    const today = new Date(Date.now())
    if (holiday.date.datetime.month - 1 === today.getMonth()) {
        if (holiday.date.datetime.day >= today.getDate()) {
            return holiday
        }
    } else if (holiday.date.datetime.month - 1 > today.getMonth()) {
        return holiday
    }
}

export default function NavBar() {
    const [date, setDate] = useState("")
    const [name, setName] = useState()
    

    const getHoliday = () => {
        axios.get(`https://calendarific.com/api/v2/holidays?api_key=${process.env.REACT_APP_CALENDAR_API_KEY}&country=US&year=2021&type=national`)
    .then(response => {
        console.log(response.data.response.holidays)
        const nextHoliday = response.data.response.holidays.find(getNextHoliday)
        setDate(nextHoliday.date.iso)
        setName(nextHoliday.name)
    })};

    useEffect(() => {

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
