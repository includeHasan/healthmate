var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var rateLimit = require('express-rate-limit');
var userRouter = require('./routes/user.route');
var doctorRouter = require('./routes/docter.route');
var dotenv = require('dotenv');
var patientRouter = require('./routes/patient.route');
var doctersRouter = require('./routes/docters.route');
var session = require('express-session');





dotenv.config();

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true if using HTTPS
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again in an hour!"
});

app.use(limiter);

app.use('/user', userRouter);
app.use('/docter', doctorRouter);
app.use('/patient', patientRouter);
app.use('/docters', doctersRouter);

app.get('/', (req, res) => {
  res.send('server is running');
})


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
  res.send({error:err.message});
});

module.exports = app;
