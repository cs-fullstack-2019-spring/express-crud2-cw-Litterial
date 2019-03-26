var express = require('express');
var router = express.Router();
var PostCollection=require('../models/PostSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  PostCollection.find({},(err,results)=> //finds all the entries in database
  {
    if (err) res.render('errors');

    else
    {
      context={ //renders content on home page
        title:"Post Collection",
        results:results,
      };
      res.render('index',context);
    }

  });

});

router.get('/createPost',(req,res)=>   //rendets to create post
{
  res.render('createPost')
});

router.get('/acceptSave',(req,res)=>   //gets the information from the form in createpost
{
  PostCollection.create(
      {
        userId: req.query.UserID,
        id: req.query.PostID,
        title: req.query.Title,
        body: req.query.Body,
      },
      (err,results)=>{
        if(err) res.render('errors');   //goes to custom error page
        else res.redirect('/');
     }
);
});




router.get('/update',(req,res)=>  // renders to update in pug
{
  res.render('update');
});

router.get('/updateSave',(req,res)=>  //gets information from updated form
{
  PostCollection.update({id:req.query.PostID},{userId: req.query.UserID,title: req.query.Title, body: req.query.Body},(err,results)=>
  {
    if (err)res.render('errors');
    else
    {
      PostCollection.find({id:req.query.PostID},(err2,results2)=>  //grabs the post id from the form
      {
        context={title:"Post Collection", results:results2, Update:'Updated Post'};   //the only content that will show on the index pug is the updated form
        res.render('index',context);

      });
    }
  })
});

module.exports = router;
