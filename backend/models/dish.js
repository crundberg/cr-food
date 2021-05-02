const DishModel = ({ database }) => {
	const getAll = () => database.query('SELECT * FROM dishes');

	const getById = (id) =>
		database.query('SELECT * FROM dishes WHERE id=?', [id]);

	const create = ({ id, name }) =>
		database.query('INSERT INTO dishes VALUES (?, ?)', [id, name]);

	const edit = ({ id, name }) =>
		database.query('UPDATE dishes SET name=? WHERE id=?', [name, id]);

	const remove = (id) =>
		database.query('DELETE FROM dishes WHERE id=? RETURNING id', [id]);

	return {
		getAll,
		getById,
		create,
		edit,
		remove,
	};
};

module.exports = DishModel;
