const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express();
const  cors = require('cors')

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// database
mongoose.connect(
  "mongodb+srv://esterdev:esterdev@omnistack-cjkv9.mongodb.net/omni09ESGtest?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('MongoDB connected...')).catch(err => console.log(err))

app.use(cors())
app.use(routes)

const port = process.env.PORT || 3333;
app.listen(port, console.log(`server working on port ${port}`))