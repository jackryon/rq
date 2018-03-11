let RQ = require('../models/rq')

exports.destroy = (req, res) => {
  RQ.remove({ _id: req.params.id }, (err) => {
    if(err) throw err
    res.json({ msg: 'rq deleted' })
  })
}

exports.index = (req, res) => {
  RQ.find({}, null, { sort: 'date' }, (err, rqs) => {
    if(err) res.status(500).json({ msg: err })
    res.json(rqs)
  })
}

exports.create = (req, res) => {
  var rq = new RQ({
    value: req.body.value,
    date: req.body.date
  })

  rq.save(err => {
    if(err) return res.json(err)
    res.json({ msg: 'rq saved!'})
  })
}
