import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../styles/Home.css'

const Home = () => {
    const [date, setDate] = useState(new Date());
    const changeDate = () => {
        setDate(date);
    }
    return (
        <div id='Home'>
            <Calendar value={date} onChange={changeDate} />
        </div>
    )
}

export default Home
