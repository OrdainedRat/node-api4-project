const app = require('./api/server.js')


const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})