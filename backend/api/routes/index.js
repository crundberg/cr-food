const auth = require('./auth');
const dish = require('./dish');
const { authService } = require('../../loaders/auth');
const { dishService } = require('../../loaders/dish');

module.exports = (app) => {
	auth({ app, authService });
	dish({ app, dishService });
};
