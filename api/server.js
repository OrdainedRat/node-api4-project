const express = require('express');



const server = express();
server.use(express.json())

server.get('/', (req, res) => {
    res.send(`<h1>Howdy Partner<h1>`)
})
 
 
server.get('/api/users', (req, res) => {
   
    res.status(200).json({users:['Michael', 'Tom', 'Diana']})
})

server.post('/api/register', (req, res) => {
   
    res.status(201).json({username:'ordainedrat', password: 'hafkaskfjhajfklhjasdfhweuihfnas'})
 })
 
 server.post('/api/login', (req, res) => {
    
    res.status(201).json({welcome:'welcome, User!'})
 })

module.exports = server