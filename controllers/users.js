var express = require('express'),
  bcrypt = require('bcrypt'),
  router = express.Router(),
  User = require('../models/user')

router.delete('/:id', (req, res, next) => {
  User.remove({ _id: req.params.id }, function(err) {
    if(err) throw err
    res.json({ msg: 'rq deleted' })
  })
})

router.get('/', (req, res, next) => {
  return res.json({ msg: 'success' })
  //User.find({}, null, { sort: 'date' }, (err, rqs) => {
  //  if(err) throw err
  //  res.json(rqs)
  //})
})

router.post('/', (req, res, next) => {
  let user = new User(req.body)
  //return res.json(req.body)

  user.hashPassword = bcrypt.hashSync(req.body.password, 10)

  user.save((err, user) => {
    if(err) return res.json(err)

    user.hashPassword = undefined
    return res.json(user)
  })
})

//router.post('/', (req, res, next) => {
//  var user = new User(req.body)
//  user.hashPassword = bcrypt.hashSync(req.password, 10)
//
//  user.save((err, user) => {
//    if(err) return res.json(err)
//
//    user.hashPassword = undefined
//    return res.json(user)
//  })
//})

module.exports = router

