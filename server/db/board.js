const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: 'string'
  }
);
var Board = mongoose.model('Board', schema);

function save(name) {
    return new Board({name: name}).save()
}

function findAll() {
    return Board.find()
}

module.exports = {
    save: save,
    findAll: findAll
};