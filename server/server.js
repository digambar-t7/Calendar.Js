const express = require('express')
const connectToMongo = require('./db.js')
const app = express()
const port = 8000

connectToMongo()

// app.use('/api/auth', require('./routes/Auth.js'))
// app.use('/api/events', require('./routes/Events.js'))

app.listen(port, () => {
    console.log(`Server successfully running at http://localhost:${port}`)
})