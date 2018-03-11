let express = require('express'),
  router = express.Router()

router.post('/', (req, res) => {
  return res.json({ msg: 'session create' })
})

router.delete('/', (req, res) => {
  return res.json({ msg: 'session delete' })
})

module.exports = router
