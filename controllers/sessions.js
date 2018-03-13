let jwt = require('jsonwebtoken'),
  User = require('../models/user'),
  errorMsg = 'user/password not found'

exports.create = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if(err) return res.status(500).json({ msg: err })

    if(!user) {
      console.log('bad email')
      return res.status(401).json({ msg: errorMsg })
    }

    if(!user.comparePassword(req.body.password)) {
      console.log('bad password')
      return res.status(401).json({ msg: errorMsg })
    } else {
      return res.json({ token: jwt.sign({
        _id: user._id,
        email: user.email,
        fullName: user.fullName
      }, 'RESTFULAPIs')})
    }
  })
}

exports.destroy = (req, res) => {
  return res.json({ msg: 'session delete' })
}

const assertLoggedIn = (req, res, next) => {
  if(req.user){
    next()
  } else {
    return res.status(401).json({ msg: 'unauthorized' })
  }
}
