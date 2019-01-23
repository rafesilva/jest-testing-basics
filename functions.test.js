const functions = require('./functions')

test('Adds 2 = 2 to equal 4.', () => {
		expect(functions.add(2, 2)).toBe(4);
});

test('Adds in not ES6 function, 2 = 2 to equal 4.', () => {
		expect(functions.addNotES6(2, 2)).toBe(4);
});

test('Should be Null', () => { 
	expect(functions.isNull()).toBeNull();
});

test('Should be Falsy.', () => {
	expect(functions.isFalsy()).toBeFalsy();
});

test('Should be X.', () => {
	expect(functions.evaluateX()).toBe('x');
});

test('Should be User.', () => {
	expect(functions.createUser()).toEqual({firstName:'Name', lastName:'Last Name'});
});

test('Should be under 1600.', () => {
	const load1 = 800;
	const load2 = 799;

	expect(load1 + load2).toBeLessThan(1600);
});

test('There is no I in team.', () => {
	expect('team').not.toMatch(/I/i);
});

test('Admin should be in usernames.', () => {
	usernames = ['adviser','user','admin'];
	expect(usernames).toContain('admin');
});

test('', async () => {
	// expect.assertions(1)
	return functions.fetchStock().then(data => {
		expect(data).toEqual('')
	});
});
