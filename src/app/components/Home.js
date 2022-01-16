import React, { useState } from "react"
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "../styles/Home.css"

const Home = () => {

    const [events, setEvents] = useState([
        {
            title: "Sankranti",
            start: new Date(2022, 0, 1),
            end: new Date(2022, 0, 1)
        },
        {
            title: "Republic Day",
            start: new Date(2022, 0, 26),
            end: new Date(2022, 0, 26)
        }
    ])

    const [date, setDate] = useState(new Date());

    const locales = {
        "en-IN": require("date-fns/locale/en-IN")
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    })

    const changeDate = () => {
        setDate(date);
    }
    return (
        <div id="Home">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
            />
            <div id="AddEvent">
                <h1 className="heading">#Let's add an event</h1>
                <div className="form">
                    <input type='text' name="title" placeholder="Event title goes here..." required />
                    <input type='text' name="desc" placeholder="Event description goes here..." required />
                    <span>Starts at:</span> <input type='date' name="startDate" placeholder="Event Start Date" required />
                    <span>Ends at:</span> <input type='date' name="endDate" required />
                    <button type="submit" className="submit addEventBtn">Add</button>
                </div>
            </div>
        </div >
    )
}

export default Home
