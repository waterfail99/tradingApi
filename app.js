var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/config');
var usersRouterHistory = require('./routes/history');
var usersRouterSymbol = require('./routes/symbols');
var userTime = require('./routes/timescale_marks');
var usersMarks = require('./routes/marks');
var usersTime = require('./routes/time');
var usersInfo = require('./routes/symbol_info');
var userSearch = require('./routes/search');

var app = express();

app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/history', usersRouterHistory);
app.use('/config', usersRouter);
app.use('/symbols', usersRouterSymbol);
// app.use('/search',userSearch)
// app.use('/timescale_marks', userTime);
// app.use('/marks',usersMarks);
// app.use('/time',usersTime);
// app.use('/symbol_info',usersInfo);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
