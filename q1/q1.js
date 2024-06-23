import { q1Data } from "./q1Data.js";

function sortUserName(users) {
	return users.sort((a, b) => {
		const nameA = a.firstName + a.lastName + a.customerID;
		const nameB = b.firstName + b.lastName + b.customerID;
		return nameA.localeCompare(nameB, undefined, { numeric: true });
	});
}

function sortByType(users) {
	const professionPriority = {
		systemAnalytics: 5,
		engineer: 4,
		productOwner: 3,
		freelancer: 2,
		student: 1,
	};

	return users.sort((a, b) => {
		return professionPriority[b.profession] - professionPriority[a.profession];
	});
}

console.log(sortUserName(q1Data));
console.log(sortByType(q1Data));
