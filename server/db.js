const mongoose = require('mongoose')

const mongoURL = 'mongodb://localhost:27017/CalendarJs?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

const connectToMongo = () => {
    mongoose.connect(mongoURL, () => {
        console.log('Connection to MongoDb successfull')
    })
}

module.exports = connectToMongo