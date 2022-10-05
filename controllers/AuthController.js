const Auth = require("./../models/Auth");

class AuthController {
	static register(req, res) {
		const { email, password } = req.body;
		Auth.register(email, password)
			.then((data) => {
				res.json(data);
			})
			.catch((error) => {
				res.json(error);
			});
	}

	static getDataWithBearerToken(req, res) {
		const {email, password}  = req.user;
		console.log(req.user);
		Auth.getDataWithBearerToken(email, password)
			.then(data => {
				res.json({user: {email: email, password: password}, data: data})
			})
			.catch(error => {
				res.json(error);
			});
	}
}

module.exports = AuthController;
