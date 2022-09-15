var express = require('express');
const fs = require('fs');
var router = express.Router();
const Feed = require("../models/feedModel")
const mongoose = require("mongoose")



let Parser = require('rss-parser');
let parser = new Parser();

// Ping to keep Heroku dyno up
router.get('/ping', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Loaded Successfully');
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
/* GET feeds page. */



router.get('/home', async (req, res) => {
  console.log("GET FEEDS")
  const feeds =  Feed.find({},(err, feeds) => {
  if (err) {
      console.log("error: "+err);
  }
  else{
      res.send(feeds)
                      // res.send(JSON.stringify())
                    
                  }
                });
  
  
  }
  
  

);
router.get('/getfeeds/:id', async (req, res) => {
  // // Connection URI
  
  console.log("GET ARTS " +req.params.id)
  // getFeedRSS(req.params.id);
 
  }
  
  

);
// function getFeedRSS(feedId){
// console.log("get for: "+feedId)
// //get feedUrl
// const feed = collection.find({_id: feedId}).toArray();
// // const feed = client.db.collection.findOne( {_id: feedId})
// console.log("feed: "+feed);

// (
//   async () => {

//   let feed = await parser.parseURL('https://www.reddit.com/.rss');
//   console.log(feed.title);

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });

// })();

// }


  
module.exports = router;