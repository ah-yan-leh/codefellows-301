'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// Home page route
app.get('/', function(req, res) {
  res.sendFile('index.html',{
      root:'./public'
    });
});

// About page route
app.get('/about', function(req, res) {
  res.send('About this site');
});
app.use((request,response)=> response.status(404).sendFile('404.html',{root:'./public'}))
// app.use is a middleware
app.use(express.static('./public'));
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});