var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var rateLimit = require('express-rate-limit');
var userRouter = require('./routes/user.route');
var doctorRouter = require('./routes/docter.route');
var patientRouter = require('./routes/patient.route');
var doctersRouter = require('./routes/docters.route');
var appointmentRouter=require('./routes/appointment.route')
var dotenv = require('dotenv');

var session = require('express-session');
const sessionConfig = require('./utils/session');





dotenv.config();

var app = express();

app.set('trust proxy', 1);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const AllowedOrigins = ["https://healthhmate.vercel.app", "http://localhost:3000"];

app.all('*',(req, res, next) => {
  const origin = req.headers.origin;
  const theOrigin = (AllowedOrigins.indexOf(origin) >= 0)? origin : AllowedOrigins[0];
  res.header("Access-Control-Allow-Origin",theOrigin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  console.log("hit middle ware");
  
  next();
})

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, Postman)
    if (!origin || AllowedOrigins.indexOf(origin) !== -1) {
      callback(null, origin);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Handle preflight requests
app.options('*', cors());



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
app.use('/appointment',appointmentRouter)

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
