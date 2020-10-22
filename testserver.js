var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://siddhu:Siddhu@12345@cluster0.ylszd.mongodb.net/mydb?retryWrites=true&w=majority";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("Products").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


