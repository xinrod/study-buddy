var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/users');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const cors = require('cors');

const uri = "mongodb+srv://admin:admin@cluster0.wynk5.mongodb.net/studyBuddy?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});
// '/' path
app.post('/', async (req, res) => {
  console.log(req.body);
  if(req.body.id === '' || req.body.id === undefined || req.body.name === '') {
    return res.status(500);
  }
  if (req.body.id === 'classes') {
    return res.status(500);
  }
  console.log(req.body);
  await client.connect();
  const datab = client.db('studyBuddy')
  datab.createCollection(req.body.id);
  const collection = datab.collection('classes');
  collection.insertOne(req.body, (error, result) => {
    if (error) { return res.status(500).send(error); }
    res.send(result.result);
  })
});

app.get('/', async (req, res) => {
  console.log(req.body);
  await client.connect();
  const collection = client.db('studyBuddy').collection('classes');
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    res.send(result);
  });
});

app.delete('/', async (req, res) => {
  if (req.body.id === 'classes') {
    return res.status(500).send(error);
  }
  console.log(req.body.name);
  await client.connect();
  const database = client.db('studyBuddy');
  database.collection(req.body.id).drop();
  const collection = database.collection('classes');
  collection.deleteOne(({name : req.body.name}, {id : req.body.id}), function(err, result) {
    if (err) throw err;
    console.log("1 document deleted");
    res.send(result);
  });
});

app.delete('/deleteNote', async (req, res) => {
  const id = req.query.id;
  const title = req.query.title;
  const author = req.query.author;
  console.log(id,author,title, 'delete');
  await client.connect();
  const database = client.db('studyBuddy');
  const collection = database.collection(id);
  collection.deleteOne(({id : id}, {title : title}, {author: author}), function(err, result) {
    if (err) throw err;
    console.log("1 document deleted");
    res.send(result);
  });
});

app.get(`/getreminders`, async (req, res) => {
  console.log(req.query.id, 'get');
  const id = req.query.id;
  await client.connect();
  const database = client.db('studyBuddy');
  const collection = database.collection(id);
  collection.find({type:"reminder"}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    res.send(result);
  });
});
app.post('/addreminder', async (req, res) => {
  console.log(req.body,'postrequest')
  if (req.body.name === '') {
    return res.status(500).send('empty name');
  }
  console.log(req.body.id);
  await client.connect();
  const database = client.db('studyBuddy');
  const collection = database.collection(req.body.id);
  collection.insertOne(({
    name : req.body.name,   
    date : req.body.date, 
    type : "reminder"}), (err, result) => {
    if (err) throw err;
    console.log('request added in ' + req.body.id);
    res.send(result);
  });
});

app.post('/addNotes', async (req, res) => {
  console.log(req.body,'postrequestnote')
  let name = req.body.author;
  if (name === '') {
    name = "Anonymous";
  }
  if (req.body.title === '') {
    console.log('empty note');
    return res.status(500).send('empty title');
  }
  if (req.body.content === `<p>Notes Here! q=D/p>` || 
  req.body.content === undefined ||
  req.body.content === '') {
    console.log('empty note');
    return res.status(500).send('empty name');
  }
  // console.log(req.body.id);
  await client.connect();
  const database = client.db('studyBuddy');
  const collection = database.collection(req.body.id);
  collection.insertOne(({   
    author: name,
    id: req.body.id,
    title: req.body.title,
    content : req.body.content, 
    type : "note"}), (err, result) => {
    if (err) throw err;
    console.log('request added in ' + req.body.id);
    res.send(result);
  });
});

app.get('/getNotes', async (req, res) => {
  console.log(req.body,'getrequestnote')
  await client.connect();
  const database = client.db('studyBuddy');
  const id = req.query.id;
  const collection = database.collection(id);
  collection.find({type:"note"}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    res.send(result);
  });
});

app.patch('/updateVote', async (req, res) => {
  console.log(req.body);
  await client.connect();
  const database = client.db('studyBuddy');
  const idR = req.body.id;
  const titleR = req.body.title;
  const auth = req.body.author;
  const collection = database.collection(idR);
  collection.updateOne({
    title: titleR,
    author: auth,
  }, { $inc: {votenum: parseInt(req.body.voteNumber)}});
});


app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
