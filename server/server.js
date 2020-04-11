const database = require('./db/db-connection')
const board = require('./db/board')
const express = require('express')

const port = 3000

database.db_init().then(console.log("Connected to database"))
board.save().then((args) => {console.log("Saved "+args)});

app = express()
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/board', (req, res) => 
    board.findAll().then(result => {res.send(result)})
)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))