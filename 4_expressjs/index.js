const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req,res) =>
    res.send('Hello World-7376222it275-Varun'))

    app.get('/ab',(req,res) =>
    res.send('Hello World-7376222it178-Krishna'))

    app.get('/hii',(req,res) =>
    res.send('Hello World-7376222it139-Godson'))

app.listen(PORT, () => console.log (
    `Example app listening at http://localhost:${PORT}`))
