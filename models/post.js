var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// setup the post schema
var postSchema = new Schema({
   title: String,
   description: String,
   updated: { type: Date, default: Date.now },
   author: String,
   _comment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Post', postSchema);
