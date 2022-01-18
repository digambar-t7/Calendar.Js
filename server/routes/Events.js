const express = require('express')
const router = express.Router()
const FetchUser = require('../middleware/FetchUser')
const Events = require('../models/Events')

// CREATE an Event
router.post('/createevent', FetchUser,
    async (req, res) => {
        try {
            const { title, desc, start, end } = req.body
            let event = await Events.create({
                userid: req.user.id,
                title: title,
                desc: desc,
                start: start,
                end: end
            })
            return res.json({ success: true, event })
        } catch (error) {
            return res.status(500).json({ success: false, error })
        }
    }
)

// READ all events
router.get('/fetchevents', FetchUser, async (req, res) => {
    let success = false
    try {
        let events = await Events.find({ userid: req.user.id })
        return res.status(200).json({ success: true, events })
    } catch (error) {
        return res.status(500).json({ success, error })
    }
})

// UPDATE an existing event
router.put('/updateevent/:eventId', FetchUser, async (req, res) => {
    let success = false
    try {
        let event = await Events.findById(req.params.eventId)
        // not allowing users to update others events
        if (req.user.id !== event.userid.toString()) {
            return res.status(500).json({ success, msg: "You are unauthorized" })
        }
        // get fields to be updated from req.body
        const { title, desc, start, end } = req.body
        // create an empty obj & add only fields which are to be updated
        let newEvent = {}
        if (title) {
            newEvent.title = title
        }
        if (desc) {
            newEvent.desc = desc
        }
        if (start) {
            newEvent.start = start
        }
        if (end) {
            newEvent.end = end
        }
        // finally update the existing event with the new one
        event = await Events.findByIdAndUpdate(req.params.eventId, { $set: newEvent }, { new: true })
        return res.json({ success: true, event })
    } catch (error) {
        return res.status(500).json({ success, error })
    }
})

// DELETE an existing event
router.delete('/deleteevent/:eventId', FetchUser, async (req, res) => {
    let success = false
    try {
        let event = await Events.findById(req.params.eventId)
        if (event.userid.toString() !== req.user.id) {
            return res.status(401).json({ succes, error: "You are unauthorized" })
        }
        deletedEvent = await Events.findByIdAndDelete(req.params.eventId)
        return res.status(200).json({ success: true, deletedEvent })
    } catch (error) {
        return res.status(500).json({ success, error })
    }
})

module.exports = router
