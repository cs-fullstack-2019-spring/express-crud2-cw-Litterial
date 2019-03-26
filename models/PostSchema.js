var mongoose = require('mongoose');  //requires mongooses to connect model to database
var Schema = mongoose.Schema;

var PostSchema = new Schema(
    {
        userId: Number,
        id: Number,
        title: String,
        body: String,
    });

//Export model
module.exports = mongoose.model('Post', PostSchema);  //post is the name of our collection