var express = require('express');
var router = express.Router();
var data = require('../bin/postData');  //grabs data from this location
var PostSchema = require('../models/PostSchema');  //uses model schema

router.get('/', (req, res)=> {
    PostSchema.create(data.postData, (error, results)=> {
        if(error) res.send(error);
        else res.send(results);
    });
});

module.exports = router;