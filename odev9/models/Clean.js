const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Clean = new Schema({
    title:String,
    detail:String,
    dateCreated:{
        type:Date,
        default:Date.now
    }
});

const Clean1=mongoose.model('Clean',Clean);
module.exports = Clean1;