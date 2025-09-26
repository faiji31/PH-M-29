const employee = {
    name: 'liam',
    designation: 'QA',
    salary: 20000,
    experience: 3,
    age:22
}

// delete employee.designation
// delete employee.salary

Object.seal(employee)

employee.salary = employee.salary + 2000;
employee.location = "khulna";
employee.university = 'iub';
console.log(employee)