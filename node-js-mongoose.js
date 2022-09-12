var mongoose = require('mongoose');
let feedModel = require('./models/feedModel');
// make a connection 
mongoose.connect('mongodb://localhost:27017/fantasyfoodball-dev');
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
    console.log("Insert Doc");
  //   title: { type: String, required: true },
  // text: { type: String, required: true },
  // feedLink: { type: String},
  // moreLink: { type: String},
  // image: { type: String},
  // date: { type: Date, required: true },
    var feed = new feedModel({
      title: "FOX SPORTS",
      text: "/test",
      feedLink: "/test",
        date :   "",
        happiness : req.body.happiness,
        public : publicYn
});
feed.save(function (error, post) {
      if (error){ 
        logger.error(error.message);
        res.send(error.message);
        
      }
      
      res.send(post)
});
});