const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  feedLink: { type: String},
  expertLevel: { type: String},
  
})
  

const Feed = mongoose.model('Feed', feedSchema);
module.exports = Feed;