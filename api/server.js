const express = require('express');
const { mod } = require('prelude-ls');


const server = express();
 server.use(express.json())
 server.get('/api/users', (req, res) => {
    try{
        res.status(200).json({users:['Michael', 'Tom', 'Diana']})
    } catch(err) {
        res.status(500).json({message: 'Error'})
    }
    
})
 server.post('/api/register', (req, res) => {
    try{
        res.status(201).json({username:'ordainedrat', password: 'hafkaskfjhajfklhjasdfhweuihfnas'})
    } catch {
        res.status(500).json({message: 'error'})
    }
})
 server.post('/api/login', (req, res) => {
    try{
        res.status(201).json({welcome:'welcome, User!'})
    } catch {
        res.status(500).json({message: 'error'})
    }
})

module.exports = server;