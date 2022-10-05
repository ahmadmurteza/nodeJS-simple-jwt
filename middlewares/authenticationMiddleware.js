const jwt = require('jsonwebtoken');

async function authenticationMiddleware(req, res, next) {
	try {
		const { authorization } = req.headers;
		const token = authorization.split("Bearer ");
		if (token.length !== 2) throw { name: "InvalidToken" };
		// const data = jwt.verify(token[1], 'secret');
		// console.log(data);
		const { email, password } = jwt.verify(token[1], 'secret');
		req.user = { email, password };
		next();
	} catch (error) {
		res.json({ message: "Unauthorized" });
	}
}

module.exports = authenticationMiddleware;
