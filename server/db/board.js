const mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    _members: [String],
    _position: Number
})

var boardSchema = new mongoose.Schema({
    _status: String,
    _name: String,
    _teams: [teamSchema],
  }
);
var Board = mongoose.model('Board', boardSchema);

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
    return Board.findById(id)
}
function findAll() {
    return Board.find()
}

module.exports = {
    save: save,
    findAll: findAll,
    findById: findById
};