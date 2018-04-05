module.exports = (req, res) => {
  req.session.views = (req.session.views || 0) + 1
  console.log('Session: ', req.session)
  console.log('Session Options: ', req.sessionOptions)
  res.end(req.session.views + ' views')
}
