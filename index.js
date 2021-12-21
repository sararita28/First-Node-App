const express = require('express')

    //express app
const app = express()

const port = process.env.PORT || 8080

const server = app.listen(port)
    //index page
app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})
app.get('/index.html', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})
    //about page
app.get('/about.html', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})
    //contact page
app.get('/contact-me.html', (req, res) => {
    res.sendFile('./contact-me.html', {root: __dirname})
})
    //404 page
app.use((req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname})
})
