var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// setup the comment schema
var commentSchema = new Schema({
   description: String,
   updated: { type: Date, default: Date.now },
   _post: { type: Schema.Types.ObjectId, ref: 'Post' },
});

module.exports = mongoose.model('Comment', commentSchema);
