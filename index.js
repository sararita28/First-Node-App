const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    next()
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    next()
})

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact-me.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '404.html'))
})

app.listen((err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Listening on port:' + port)
    }
})
