let bcrypt = require('bcrypt'),
  User = require('../models/user')

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
