const express = require('express');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();
router.use(isAuth);

module.exports = ({ app, dishService }) => {
	// Get all posts
	router.get('/', async (_req, res) => {
		const results = await dishService.getAll();
		res.json({ success: true, data: results });
	});

	// Get single post
	router.get('/:id(\\d+)', async (req, res) => {
		const [item] = await dishService.getById(req.params.id);

		if (!item) {
			return res.json({
				success: false,
				error: 'No records found',
				id: req.params.id,
			});
		}

		return res.json({ success: true, data: item });
	});

	// Insert post
	router.post('/', async (req, res) => {
		const post = req.body;
		const results = await dishService.create(post);
		post.id = results.insertId;
		res.json({
			success: true,
			message: 'Post was successfully inserted',
			data: post,
		});
	});

	// Update post
	router.put('/:id(\\d+)', async (req, res) => {
		const post = { ...req.body, id: parseInt(req.params.id, 10) };
		const results = await dishService.edit(post);

		if (results.affectedRows < 1) {
			return res.json({
				success: false,
				error: 'No affected rows',
				id: req.params.id,
			});
		}

		return res.json({
			success: true,
			message: 'Post was successfully updated',
			data: post,
		});
	});

	// Delete post
	router.delete('/:id(\\d+)', async (req, res) => {
		const [item] = await dishService.remove(req.params.id);
		if (!item)
			return res.json({
				success: false,
				error: 'No affected rows',
				id: req.params.id,
			});

		return res.json({
			success: true,
			message: 'Post was successfully deleted',
			id: item.id,
		});
	});

	app.use('/api/dish', router);
};
