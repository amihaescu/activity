const mongoose = require('mongoose');

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
    console.log(boardId, teamId,teamMember)
    return Board.findOneAndUpdate({"_id": boardId, "_teams._id": teamId}, { $push: {"_teams.$._members": teamMember}}, {new: true})
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
    addToTeam: addToTeam
};