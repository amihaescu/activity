const mongoose = require('mongoose');
function db_init() {
    return mongoose
    .connect('mongodb://localhost:27017/activity', {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = {
    db_init : db_init
}
    