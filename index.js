// Your code here
function createEmployeeRecord(array) {
	let records = {
		firstName: array[0],
		familyName: array[1],
		title: array[2],
		payPerHour: array[3],
		timeInEvents: [],
		timeOutEvents: [],
	};
	return records;
}
function createEmployeeRecords() {
	let employeeRecords = array.map((itemInArray) =>
		createEmployeeRecord(itemInArray)
	);
	return employeeRecords;
}
