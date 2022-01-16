import React, { useState } from "react"
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "../styles/Home.css"

const Home = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [from, setFrom] = useState(new Date())
    const [to, setTo] = useState(new Date(1970, 0, 0))
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

    const changeDesc = (e) => {
        setDesc(e.target.value)
    }

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleFrom = (e) => {
        setFrom(e.target.value)
    }

    const handleTo = (e) => {
        setTo(e.target.value)
    }

    const addEvent = (e) => {
        e.preventDefault()
        setEvents([...events, {
            title: title,
            desc: desc,
            start: from,
            end: to
        }])
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
                <form onSubmit={addEvent}>
                    <input value={title} onChange={changeTitle} type='text' name="title" placeholder="Event title goes here..." required />
                    <input value={desc} onChange={changeDesc} type='text' name="desc" placeholder="Event description goes here..." required />
                    <span>Starts at:</span><input onChange={handleFrom} type='date' name="startDate" placeholder="Event Start Date" required />
                    <span>Ends at:</span><input onChange={handleTo} type='date' name="endDate" required />
                    <button type="submit" className="submit addEventBtn">Add</button>
                </form>
            </div>
        </div >
    )
}

export default Home
