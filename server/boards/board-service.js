const board = require('../db/board')

function init(app) {
    app.get('/board', (req, res) => 
        board.findAll().then(result => res.send(result))
    )
    app.post('/board', (req, res) =>
        save().then(result => res.send(result))
    )
    app.get('/board/:id', (req, res) => 
        findById(req.params.id).then(result => res.send(result))
    )

}

function save() {
    return new Board({
        _status: "In Progress", 
        _name: "Game1", 
        _teams: [
            {_members: ["Alex", "Lalal"], _position: 0},
            {_members: ["Andrei", "Radu"], _position: 0}
        ]
    }).save()
}

function findById(id) {
    return board.findById(id)
}
function findAll() {
    return board.find()
}
module.exports = {
    init : init,
    save: save,
    findAll: findAll,
    findById: findById
}