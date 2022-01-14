const express = require('express');
const res = require('express/lib/response');

const app = express();

app.use(express.json())

app.get('/api/users', (req, res) => {
    try{
        res.status(200).json({users:['Michael', 'Tom', 'Diana']})
    } catch(err) {
        res.status(500).json({message: 'Error'})
    }
    
})

app.post('/api/register', (req, res) => {
    try{
        res.status(201).json({username:'ordainedrat', password: 'hafkaskfjhajfklhjasdfhweuihfnas'})
    } catch {
        res.status(500).json({message: 'error'})
    }
})

app.post('/api/login', (req, res) => {
    try{
        res.status(201).json({welcome:'welcome, User!'})
    } catch {
        res.status(500).json({message: 'error'})
    }
})