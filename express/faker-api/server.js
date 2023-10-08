const express = require("express");
const app = express();
const port = 8000;

const { faker } = require("@faker-js/faker");

const createUser = () => {
	const newUser = {
		_id: faker.string.uuid(),
		password: faker.internet.password(),
		email: faker.internet.email(),
		phoneNumber: faker.phone.number(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
	};
	return newUser;
};

const createCompany = () => {
	const newCompany = {
		_id: faker.string.uuid(),
		name: faker.company.name(),
		address: {
			street: faker.location.streetAddress(),
			city: faker.location.city(),
			state: faker.location.state(),
			zipCode: faker.location.zipCode(),
			country: faker.location.country(),
		},
	};
	return newCompany;
};

app.get("/api/users/new", (req, res) => {
	res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
	res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
	const user = createUser();
	user.company = createCompany();
	res.json(user);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
