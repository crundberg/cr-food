const jwt = require('express-jwt');
const config = require('../../config');

const getToken = (req) => {
	// Get token from cookie
	if (req.cookies.token) {
		return req.cookies.token;
	}

	// Get token from header
	if (
		req.headers.authorization &&
		req.headers.authorization.split(' ')[0] === 'Bearer'
	) {
		return req.headers.authorization.split(' ')[1];
	}

	return false;
};

module.exports = jwt({
	secret: config.jwt.secret,
	algorithms: ['HS256'],
	userProperty: 'token', // this is where the next middleware can find the encoded data generated in services/auth:generateToken
	getToken,
});
