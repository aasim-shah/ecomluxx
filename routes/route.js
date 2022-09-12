var express = require('express');
const fs = require('fs');
var router = express.Router();

Feed = require('../models/feedModel');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/fantasyfootball-dev";

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
  // Connection URI
  const uri = 'mongodb://localhost:27017/';
  const client = new MongoClient(uri);
  
  // Create a new MongoClient
  client.connect();
  const collection = client.db("fantasyfootball-dev").collection('feeds');
  // Establish and verify connection
  client.db("feeds").command({ ping: 1 });
    console.log("Connected successfully to server");
    // res.render('home');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    res.json(findResult);
  }
  
  

);
  // find all documents
  // const queryAllFeeds = () => {
    //Where User is you mongoose user model
  //   Feed.find({} , (err, feeds) => {
  //       if(err) //do something...

  //       feeds.map(feed => {
  //         console.log(feed);
  //           //send daily reminder
  //       })
  //   })
  // }
  // let feeds = Feed.find({});
  // console.log(feeds.size())
  // console.log(feeds)
//   try{
//     var q = Feed.find({});
//     q.exec(function(err, feeds) {
//       if (err){ 
//           logger.error(err.message);
//           res.send(err.message);
//           next();  
//       }
//       console.log(feeds);
//       res.json(feeds);
//     })
// }
// catch(err){
//   //no posts yet, load page anyway
//   console.log.error(err.message);
//   res.send(err.message);
//   next();  
// }

//   try{
//     var f = Feed.find({});
    
//     f.exec(function(err, feeds) {
//       console.log("exec")
//       if (err){ 

//           console.log(err.message);
//           res.send(err.message);
//           next();  
//       }
//       console.log(feeds);
//       res.json(feeds);
//     })
// }
// catch(err){
//   //no posts yet, load page anyway
//   console.log(err.message);
//   res.send(err.message);
//   next();  
// }
  //get all feeds from Mongo//
// Empty `filter` means "match all documents"
  // const filter = {};
  // const feeds = await Feed.find({});
  // console.log("Feeds: "+feeds);
  // (async () => {

  //   let feed = await parser.parseURL('https://www.reddit.com/.rss');
  //   console.log(feed.title);
  
  //   feed.items.forEach(item => {
  //     console.log(item.title + ':' + item.link)
  //   });
  
  // })();
  
  
  // var buf=fs.readFileSync('feeds.txt', 'utf-8');

  // buf.toString().split(/\n/).forEach(function(line){
  //   // do something here with each line
  //   console.log("CALL RSS FOR FEED: "+line);
  //   (async () => {

  //   let feed = await parser.parseURL(line);
  //   console.log(feed.title);
  
  //   feed.items.forEach(item => {
  //     console.log("")
  //     console.log(item.title + ':' + item.link)
  //   });
  
  // })();
  // });

  
  // console.log(feed.title);
  // console.log("=========================================");

  // feed.items.forEach(item => {
  //   console.log("Title: :"+item.title );
  //   console.log("LINK: : "+item.link );
  // });

// });
module.exports = router;