let jwt = require('jsonwebtoken'),
  User = require('../models/user'),
  errorMsg = 'user/password not found'

exports.create = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if(err) return res.status(500).json({ msg: err })

    if(!user) {
      return res.status(401).json({
        msg: errorMsg, error: { message: errorMsg }
      })
    }

    if(!user.comparePassword(req.body.password)) {
      return res.status(401).json({
        msg: errorMsg, error: { message: errorMsg }
      })
    }

    return res.json({ token: jwt.sign({
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
			role: user.role
    }, 'RESTFULAPIs')})
  })
}

exports.destroy = (req, res) => {
  return res.json({ msg: 'session delete' })
}

exports.assertAuthorized = (req, res, next) => {
  if(req.user) {
    next()
  } else {
		console.log('***', 'unauthorized')
    return res.status(401).json({ msg: 'User not authorized!' })
  }
}

exports.assertAdmin = (req, res, next) => {
  if(req.user && req.user.role === 'admin') {
		next()
  } else {
		return res.status(401).json({ msg: 'Access denied!' })
  }
}

