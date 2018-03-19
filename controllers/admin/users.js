let User = require('../../models/user')

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
