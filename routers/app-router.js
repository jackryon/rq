let users = require('../controllers/users'),
  sessions = require('../controllers/sessions'),
  rqs = require('../controllers/rqs')

exports.draw = (app) => {
  console.log('drawing app routes')

  app.route('/api/users')
    .get(users.index)
    .post(users.create)

  app.route('/api/users/:id')
    .put(users.update)
    .delete(users.destroy)

  app.route('/api/rqs')
    .post(rqs.create)
    .get(rqs.index)

  app.route('/api/rqs/:id')
    .delete(rqs.destroy)

  app.route('/api/sessions')
    .post(sessions.create)
}
