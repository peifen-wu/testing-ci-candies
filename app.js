const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/candies', (req, res) => {
    res.status(200).json([{'name': 'bon bon'}])
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})