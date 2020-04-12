const mongoose = require('mongoose');
const cards_service = require('../cards/cards-service');

var teamSchema = new mongoose.Schema({
    _members: [String],
    _position: Number
})

var boardSchema = new mongoose.Schema({
    _status: String,
    _name: String,
    _teams: [teamSchema],
    _currentTeam: String,
    _tiles: [String],
  }
);
var Board = mongoose.model('Board', boardSchema);

function newBoard(name) {
    return new Board({
        _status: "Not started", 
        _name: name, 
        _tiles: randomizeTiles(),
        _teams: []
    }).save()
}

function newTeam(boardId){
    return Board.updateOne({_id: boardId}, { $push: {_teams: {}}})
}

function addToTeam(boardId, teamId, teamMember) {
    return Board.findOneAndUpdate({"_id": boardId, "_teams._id": teamId}, { $push: {"_teams.$._members": teamMember}}, {new: true})
}

function getCardForTeam(params) {
    return Board.findById({"_id": params.id}).then( board => {
        var teamPosition = board._teams.filter(it => it._id == params.teamId).map(it => it._position);
        var teamActivity = board._tiles[teamPosition]
        var teamCard = cards_service.getCardForLevel(params.level)
        teamCard["activity"] = teamActivity
        return teamCard
    })    
}

function advanceTeam(request) {
    var params = request.params
    console.log(params)
    console.log(request.body)
    return Board
        .findOneAndUpdate({"_id": params.id, "_teams._id": params.teamId}, { $inc: {"_teams.$._position": request.body.value}}, {new: true})
        .then(newBoard => {
            team = newBoard._teams.filter(it => it._id == params.teamId)
            if ( team[0]._position> 15){
                console.log("Team won")
                return Board.findOneAndUpdate({"_id": params.id}, {$set: {"_status": "Finished"}}, {new: true})
            }
            else return newBoard
        })
}

function randomizeTiles() {
    var i = 0;
    items = ["mime_1","mime_2", "speak_1", "speak_2", "draw_1", "draw_2"]
    var tiles = [];
    while (i++ < 50) {
        tiles.push(items[Math.floor(Math.random() * items.length)]);
    }
    return tiles;
}

function findById(id) {
    return Board.findById(id)
}
function findAll() {
    return Board.find()
}

module.exports = {
    newBoard: newBoard,
    findAll: findAll,
    findById: findById,
    newTeam: newTeam,
    addToTeam: addToTeam,
    getCardForTeam: getCardForTeam,
    advanceTeam: advanceTeam
};