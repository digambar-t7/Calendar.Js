const express = require('express')
const connectToMongo = require('./db.js')
const port = 3131

connectToMongo()

const app = express()
app.use(express.json())

app.use('/api/auth', require('./routes/Auth'))
app.use('/api/events', require('./routes/Events'))

app.listen(port, () => {
    console.log(`Server successfully running at http://localhost:${port}`)
})