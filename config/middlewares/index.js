const cookieSession = require('cookie-session')
const Keygrip = require('keygrip')
module.exports = app => {
  app.use(cookieSession({
    name: 'session',
    keys: new Keygrip(['key1', 'key2'], 'SHA384', 'base64'),
    maxAge: 24 * 60 * 60 * 1000
  }))
  
  app.use(function (req, res, next) {
    req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge
    next()
  })
}
