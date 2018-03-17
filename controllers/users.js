let bcrypt = require('bcrypt'),
  User = require('../models/user')

exports.index = (req, res) => {
  User.find({}, null, { sort: 'email' }, (err, users) => {
    if(err) res.status(500).json(err)
    users.map( u => u.hashPassword = undefined )
    return res.json(users)
  })
}

exports.destroy = (req, res) => {
  User.remove({ _id: req.params.id }, (err) => {
    if(err) res.status(500).json({ msg: err })
    res.json({ id: req.params.id })
  })
}

exports.create = (req, res) => {
  let user = new User(req.body)
  user.hashPassword = bcrypt.hashSync(req.body.password, 10)

  user.save((err, user) => {
    if(err) return res.json(err)
    user.hashPassword = undefined
    return res.json(user)
  })
}

exports.update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if(err) return res.status(500).json(err)
    return res.json({ msg: 'success' })
  })
}
