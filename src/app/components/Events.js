import React, { useContext, useEffect, useState } from 'react'
import EventContext from '../context/EventContext'
import '../styles/Events.css'

const Events = () => {

    const context = useContext(EventContext)
    const { events, setEvents, read, deleteEvent, update } = context
    const [event, setEvent] = useState({
        id: '',
        title: '',
        desc: '',
        start: new Date().now,
        end: new Date().now
    })
    const handleUpdate = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value })
    }
    const updateEvent = (e) => {
        e.preventDefault()
        const { id, title, desc, start, end } = event
        console.log('func : ', id)
        update(id, title, desc, start, end)
        dismissUpdate(id)
    }
    const showUpdate = (id, title, desc) => {
        document.getElementById(`update-${id}`).style.display = "flex"
        setEvent({
            id: id,
            title: title,
            desc: desc,
        })
    }
    const dismissUpdate = (id) => {
        document.getElementById(`update-${id}`).style.display = "none"
    }
    const getEvents = () => {
        if (localStorage.getItem('token')) {
            read()
            setEvents(events)
        }
    }
    useEffect(() => {
        getEvents()
    }, [])
    return (
        <div id='Events'>
            <h1 className='heading'>All of your Reminders, Events & Meetings appear here</h1>
            {/* <hr /> */}
            <div id='events-container'>
                <div id='title'>
                    <h1 className='left'>Date</h1>
                    <h1 className='right'>Event</h1>
                </div>

                {/* iteration starts here */}
                {events.map((e) => {
                    return <><div className='instance'>
                        <div className='left'>
                            <p className='date'>{`${e.start.split('T')[0]} to ${e.end.split('T')[0]}`}{localStorage.setItem(e.title, e.start)}</p>
                        </div>
                        <div className='right'>
                            <p className='name'>{e.title}</p>
                            <p className='desc'>{e.desc}</p>
                            <span className='icons'>
                                <img className='delete' onClick={() => { deleteEvent(e._id) }} src={require('../images/delete.png')} />
                                <img className='edit' onClick={() => { showUpdate(e._id, e.title, e.desc) }} src={require('../images/edit.png')} />
                            </span>
                        </div>
                    </div>
                        <form onSubmit={updateEvent} className='update' id={`update-${e._id}`} >
                            <h1>Update Event <img src={require('../images/close.png')} onClick={() => { dismissUpdate(e._id) }} /> </h1>
                            <div className='updateEntry'><span>New Title : </span><input value={event.title} onChange={handleUpdate} type='text' name="title" placeholder="Event title goes here..." /></div>
                            <div className='updateEntry'><span>New Description :</span><input value={event.desc} onChange={handleUpdate} type='text' name="desc" placeholder="Event description goes here..." /></div>
                            <div className='updateEntry'> <span>Starts at:</span><input onChange={handleUpdate} type='date' name="start" /></div>
                            <div className='updateEntry'><span>Ends at:</span><input onChange={handleUpdate} type='date' name="end" /> </div>
                            <button type="submit" className="submit addEventBtn updateEntry">Update</button>
                        </form>
                    </>
                })}
                {/* iteration ends here */}
            </div>

        </div>
    )
}

export default Events