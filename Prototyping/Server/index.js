const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const Static = require('koa-static')
const Helmet = require('koa-helmet')
const Session = require('koa-session')
const Body = require('koa-body')
const Respond = require('koa-respond')
const Send = require('koa-send')
const Compress = require('koa-compress')

const moment = require('moment')
const passport = require('koa-passport')

const app = new Koa()

/* Server side routing (mainly used for API) */
const router = new Router()

/* Body Parser Setup */
app.use(Body({ multipart: true }))

/* Adds useful ctx functions for API responses */
app.use(Respond())

/* Use compression for API responses to decrease size */
app.use(Compress())

app.keys = [process.env.SESSION_KEY]

/* Setup session */
const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  // secure: true,
  renew: true
}
app.use(Session(CONFIG, app))

