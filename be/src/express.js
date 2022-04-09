const express = require('express')
const app = express()
const axios = require('axios')
const port = 3000

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`SpotifyHandler listening on port ${port}`)
  })

