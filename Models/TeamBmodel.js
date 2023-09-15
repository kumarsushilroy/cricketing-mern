
const mongoose = require('mongoose');

const teamBSchema = new mongoose.Schema({
    playername:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('teamB', teamBSchema)