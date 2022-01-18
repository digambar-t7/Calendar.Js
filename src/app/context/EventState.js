import { useState } from 'react'
import EventContext from './EventContext'

const EventState = (props) => {
    const url = 'http://localhost:3131/api/events'
    const [events, setEvents] = useState([])

    // READ all stored events
    const read = async () => {
        const response = await fetch(`${url}/fetchevents`, {
            method: "GET",
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        })
        const json = await response.json()
        setEvents(json.events)
    }

    // CREATE an event
    const create = async (title, desc, start, end) => {
        const response = await fetch(`${url}/createevent`, {
            method: "POST",
            headers: {
                "auth-token": localStorage.getItem('token'),
                "Content-type": "application/json"
            },
            body: JSON.stringify({ title, desc, start, end })
        })
        const json = await response.json()
        if (json.success) {
            setEvents(events.concat(json.event))
        }
        read()
    }

    return (
        <EventContext.Provider value={{ events, read, create }}>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventState
