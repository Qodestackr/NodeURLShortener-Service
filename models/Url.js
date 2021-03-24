const mongoose = require('mongoose')
const {Schema} = mongoose

const URLSchema = new Schema({
    urlCode: String, 
    longUrl: String,
    shortUrl: String,
    date:{type: String, default: Date.now}
});

module.exports = mongoose.model('Url',URLSchema);