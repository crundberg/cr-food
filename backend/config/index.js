require('dotenv').config();

module.exports = {
	port: process.env.port,
	jwt: {
		secret: process.env.jwtSecret,
		expiresIn: process.env.jwtExpiresIn,
	},
	cors: {
		local: process.env.corsLocal,
		remote: process.env.corsRemote,
	},
	database: {
		connectionLimit: process.env.connectionLimit || 10,
		socketPath: process.env.dbSocketPath,
		host: process.env.dbHost,
		port: process.env.dbPort,
		user: process.env.dbUser,
		password: process.env.dbPass,
		database: process.env.dbName,
	},
};
