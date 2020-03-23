const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

require('dotenv').config();

const app = express();

database = process.env.DATABASE || "mongodb://localhost:27017/myapp";

mongoose.connect(database.replace("<pass>",process.env.PASSWORD) ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 8080);