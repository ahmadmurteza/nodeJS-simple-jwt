const jwt = require("jsonwebtoken");
const data = require('./../data.json');
const { hash, compare } = require("./../helpers/hash");

class Auth {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}

	static register(email, password) {
		return new Promise((resolve, reject) => {
			const hashedPassword = hash(password);
			const user = new Auth(email, hashedPassword);
			const userJson = JSON.stringify(user);
			jwt.sign(userJson, 'secret', (err, token) =>  {
				if (err) {
					  err = {
						name: 'jwtError'
					  }
					  reject(err);
				  }
				resolve(token);
			});
		});
	}

	static getDataWithBearerToken() {
		return new Promise((resolve, reject) => {
			resolve(data);
		});
	}
}

module.exports = Auth;

