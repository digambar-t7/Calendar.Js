import React, { useState, useContext, useEffect } from "react"
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "../styles/Home.css"
import EventContext from "../context/EventContext";

const Home = () => {
    const context = useContext(EventContext)
    const { events, setEvents, read, create } = context
    const [event, setEvent] = useState({
        title: '',
        desc: '',
        from: new Date().now,
        to: new Date().now
    })

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

    const handleEvent = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value })
    }

    const addEvent = (e) => {
        e.preventDefault()
        const { title, desc, from, to } = event
        create(title, desc, from, to)
    }

    useEffect(() => {
        read()
    }, [])

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
                    <input value={event.title} onChange={handleEvent} type='text' name="title" placeholder="Event title goes here..." required />
                    <input value={event.desc} onChange={handleEvent} type='text' name="desc" placeholder="Event description goes here..." required />
                    <span>Starts at:</span><input onChange={handleEvent} type='date' name="from" required />
                    <span>Ends at:</span><input onChange={handleEvent} type='date' name="to" required />
                    <button type="submit" className="submit addEventBtn">Add</button>
                </form>
            </div>
        </div >
    )
}

export default Home
