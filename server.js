const database = require('./server/db/db-connection')
const cards_service = require('./server/cards/cards-service')
const board_service = require('./server/boards/board-service')
const express = require('express')

const port = 3000

database.db_init().then(console.log("Connected to database"))
app = express()
app.use(express.json())
app.use(express.static('public'))
board_service.init(app)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))