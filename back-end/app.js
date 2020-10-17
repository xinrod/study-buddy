var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/users');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

const uri = "mongodb+srv://admin:admin@cluster0.wynk5.mongodb.net/studyBuddy?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// '/' path
app.post('/', async (req, res) => {
  if (req.body.id === 'classes') {
    return res.status(500).send(error);
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
