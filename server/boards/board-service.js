const board = require('../db/board')

function init(app) {
    app.get('/board', (req, res) => 
        board.findAll().then(result => res.send(result))
    )
    app.post('/board', (req, res) =>
        board.newBoard().then(result => res.send(result))
    )
    app.get('/board/:id', (req, res) => 
        board.findById(req.params.id).then(result => res.send(result))
    )
    app.post('/board/:id/team', (req, res) =>{
        board.newTeam(req.params.id).then(result => res.send(result))
    })
    app.post('/board/:id/team/:teamId', (req, res) =>{
        board.addToTeam(req.params.id, req.params.teamId, req.body.name).then(result => res.send(result))
    })

}

module.exports = {
    init : init
}