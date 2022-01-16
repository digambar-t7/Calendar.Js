const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('hello digambar')
})

app.listen(port, () => {
    console.log(`Server successfully running at http://localhost:${port}`)
})