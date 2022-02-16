const express = require('express');
const hbs = require('hbs');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config({path : './config.env'});
const port = process.env.PORT || 8000;
require('../db/conn');

app.use(express.static('public'));
const partials = path.join(__dirname, '../views/components/');
hbs.registerPartials(partials);

app.set('view engine', 'hbs');
app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/about', (req, res)=>{
    res.render('about');
});

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
});