const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const EventsSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    desc: {
        type: String,
    },
    start: {
        type: Date,
        default: Date.now,
    },
    end: {
        type: Date,
        default: Date.now
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Events = mongoose.model('events', EventsSchema)

Events.createIndexes()

module.exports = Events