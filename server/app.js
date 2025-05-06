var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var inventoryRouter = require('./routes/inventory');
var nlpRouter = require('./routes/nlp');
var ticketsRouter = require('./routes/tickets');
var auditRouter = require('./routes/audit');
var syncRouter = require('./routes/sync');
var webhookRouter = require('./routes/webhook');
const auth = require('./middleware/auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(auth); // Access control middleware
app.use('/', indexRouter);
app.use('/inventory', inventoryRouter);
app.use('/nlp', nlpRouter);
app.use('/tickets', ticketsRouter);
app.use('/audit', auditRouter);
app.use('/sync', syncRouter);
app.use('/webhook', webhookRouter);

module.exports = app;
