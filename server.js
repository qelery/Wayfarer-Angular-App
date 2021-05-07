//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
// Replace angular-recipes-frontend with your project name
app.use(express.static(__dirname + '/dist/wayfarer'));

app.get('/*', function(req,res) {

  // Replace angular-recipes-frontend with your project name
  res.sendFile(path.join(__dirname+'/dist/wayfarer/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
