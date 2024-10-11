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
const sessionConfig = require('./utils/session');





dotenv.config();

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: ['https://healthhmate.vercel.app','http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.options('*', cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
//https://supreme-waffle-wr79766qx69vcg4vr-3000.app.github.dev/
app.use(session(sessionConfig));

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
