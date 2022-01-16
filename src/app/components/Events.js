import React from 'react'
import '../styles/Events.css'

const Events = () => {
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
                <div className='instance'>
                    <div className='left'>
                        <p className='date'>14 November,2022</p>
                    </div>
                    <div className='right'>
                        <p className='name'>King's Birthday</p>
                        <p className='desc'>This is the day on which the king of Pune was born</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Events
