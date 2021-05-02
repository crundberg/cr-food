const DishService = ({ dishModel }) => {
	const getAll = () => dishModel.getAll();
	const getById = (id) => dishModel.getById(id);
	const create = ({ id = null, name }) => dishModel.create({ id, name });
	const edit = ({ id, name }) => dishModel.edit({ id, name });
	const remove = (id) => dishModel.remove(id);

	return {
		getAll,
		getById,
		create,
		edit,
		remove,
	};
};

module.exports = DishService;
