const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const { extname } = require('path');

const app = express();
const port = 3000;
const route = require('./routes/index.js');
//static file
app.use(express.static(path.join(__dirname, 'public')));
//HTTP Logger
app.use(morgan('combined'));

//Template engine
app.engine(
  'htm',
  engine({
    extname: '.htm',
  }),
);

app.set('view engine', 'htm');
app.set('views', path.join(__dirname, 'resources/views'));
//route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
