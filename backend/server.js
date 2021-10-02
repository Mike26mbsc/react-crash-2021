const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const tasks = require('./routes/api/tasks');


const app = express();

// bodyparser middleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
//
//Connect to mongo
mongoose
  .connect(db)
  .then(()=> console.log('mongoDB Connected...'))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/tasks', tasks);


//let demoLogger = (req, res, next) =>{
 // console.log("hello from logger");
 // next();
//};
//app.use(demoLogger);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
