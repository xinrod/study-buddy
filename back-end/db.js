const MongoClient = require('mongodb').MongoClient
const connectionstring = "mongodb+srv://admin:admin@cluster0.wynk5.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(connectionstring, {
    useUnifiedTopology: true
  }, (err, client) => {
    if(err) return console.error(err);
    console.log('connected to database');
    // ... do something here
  })