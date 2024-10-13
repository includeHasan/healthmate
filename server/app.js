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

app.set('trust proxy', 1);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const AllowedOrigins = ["https://healthhmate.vercel.app", "http://localhost:3000"];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (AllowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  next();
});

app.use(cors({
  origin: ['https://healthhmate.vercel.app',`http://localhost:3000`],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Handle preflight requests
app.options('*', cors());


// Session configuration
const sessionConfig = {
  secret: 'your-secret-key', // Replace with any string for prototype
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if using https
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  },
  name: 'sessionId'
};

app.use(session(sessionConfig));
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   message: "Too many requests from this IP, please try again in an hour!"
// });

// app.use(limiter);

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
