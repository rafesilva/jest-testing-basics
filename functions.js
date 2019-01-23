const axios = require('axios')

const functions = {

	add: (num1, num2) => num1 + num2,
	
	addNotES6: function(num1, num2) {
		return num1 + num2;
	},
	
	isNull: () => null,

	isFalsy: () => false,

	evaluateX: () => 'x',

	createUser: () => {
		const user = { firstName: 'Name'};
		user['lastName'] = 'Last Name';
			return user;
	},

	fetchStock: () => axios.get('')
		.then(res => {
			return res.data
		})
		.catch(err => err),

}

	module.exports = functions;

