const database = require('../lib/database');
const DishModel = require('../models/dish');
const DishService = require('../services/dish');

const dishModel = DishModel({ database });
const dishService = DishService({ dishModel });

module.exports = {
	dishService,
};
