let users = require('../controllers/users'),
	adminUsers = require('../controllers/admin/users'),
  sessions = require('../controllers/sessions'),
  rqs = require('../controllers/rqs')

exports.draw = (app) => {

  app.route('/api/users')
    .post(users.create)

  app.route('/api/users/:id')
    .put(users.update)

  app.route('/api/rqs')
    .post(rqs.create)
    .get(rqs.index)

  app.route('/api/rqs/:id')
    .delete(rqs.destroy)

  app.route('/api/sessions')
    .post(sessions.create)


	// ADMIN
	app.route('/api/admin/users')
		.get(adminUsers.index)

  app.route('/api/admin/users/:id')
    .delete(adminUsers.destroy)
}
