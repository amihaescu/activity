const mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    members: [String],
    position: Integer
})

var boardSchema = new mongoose.Schema({
    status: String,
    name: String,
    teams: [teamSchema],
  }
);
var Board = mongoose.model('Board', boardSchema);

function save() {
    return new Board({status: "In Progress", name: "Game1", 
            teams: [
                {members: ["Alex", "Lalal"]},
                {members: ["Andrei", "Radu"]}
            ]
    }).save()
}

function findAll() {
    return Board.find()
}

module.exports = {
    save: save,
    findAll: findAll
};