var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.createCollection("customers",function(err,res){
  if(err)
  {
    console.log(err);
  }
  console.log("Collection Created!");
  db.close();
  
  })
});