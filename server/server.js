const database = require('./db/db-connection')
const cards_service = require('./cards/cards-service')
const board_service = require('./boards/board-service')
const express = require('express')

const port = 3000

database.db_init().then(console.log("Connected to database"))
app = express()
app.use(express.json())
board_service.init(app)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))