const session = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const sessionConfig = {
    secret: process.env.JWT_SECRET, // Make sure to use a strong secret key
    resave: false, // Do not resave session if unmodified
    saveUninitialized: false, // Do not save uninitialized sessions
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    },
    name: 'sessionId',
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, // Clear expired sessions every 2 minutes
      dbRecordIdIsSessionId: true,
    }),
  };
module.exports = sessionConfig;
