const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name:String
});

const Model = mongoose.model('model',Schema);

module.exports = Model; 