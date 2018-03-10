let express = require('express'),
  bcrypt = require('bcrypt'),
  router = express.Router(),
  User = require('../models/user')

router.delete('/:id', (req, res, next) => {
  User.remove({ _id: req.params.id }, (err) => {
    if(err) res.status(400).json({ msg: err })
    res.json({ id: req.params.id })
  })
})

router.get('/', (req, res, next) => {
  User.find({}, null, { sort: 'email' }, (err, users) => {
    if(err) res.status(400).json(err)
    users.map( u => u.hashPassword = undefined )
    return res.json(users)
  })
})

router.post('/', (req, res, next) => {
  let user = new User(req.body)
  user.hashPassword = bcrypt.hashSync(req.body.password, 10)

  user.save((err, user) => {
    if(err) return res.json(err)
    user.hashPassword = undefined
    return res.json(user)
  })
})

router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    console.log(user)
    if(err) return res.status(400).json(err)
    return res.json({ msg: 'success' })
  })
})

module.exports = router
