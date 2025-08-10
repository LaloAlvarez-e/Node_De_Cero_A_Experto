const table_Employees = [
    { name: "John Doe"     , email: "john.doe@example.com"     , salary: 60000, position: "Software Engineer" },
    { name: "Jane Smith"   , email: "jane.smith@example.com"   , salary: 75000, position: "Project Manager" },
    { name: "Alice Johnson", email: "alice.johnson@example.com", salary: 80000, position: "UX Designer" },
    { name: "Jane Smith"   , email: "jane.smith.intern@example.com"   , salary: 5000, position: "Intern" },
    { name: "Will Smith"   , email: "will.smith.intern@example.com"   , salary: 5000, position: "Intern" },
];


class Employee_SubTable {
    constructor(employees = []) {
        this.employees = employees;
    }

    getAllEmployees() {
        return this.employees;
    }

    getEmployeeByID(id) {
        return this.employees.find(emp => emp.getID() === id);
    }

    getEmployeeByName(name) {
        return this.employees.filter(emp => emp.getName() === name);
    }

    getEmployeeByEmail(email) {
        return this.employees.filter(emp => emp.getEmail() === email);
    }

    getEmployeeByPosition(position) {
        return this.employees.filter(emp => emp.getPosition() === position);
    }
}

class Employee_Table {
    constructor(employees = []) {
        this.employees = employees;
        //assign a unique ID with hashing a
        this.employees.forEach(emp => {
            emp.id = this.createID(emp);
        });
    }

    createID(employee){
        const { name, email, salary, position } = employee;
        const hashValue = this.hash(name, email, salary, position);
        return (hashValue);
    }

    hash(name, email, salary, position) {
        const hashString = name + email + salary + position;
        let hashValue = 0;
        for (let i = 0; i < hashString.length; i++) {
            hashValue += hashString.charCodeAt(i);
            hashValue = (hashValue << 5) - hashValue; // bitwise operation to create a unique hash
        }
        return hashValue;
    }

    addNewEmployee(employee) {
        employee.id = this.createID(employee.email);
        this.employees.push(employee);
    }

    deleteEmployeeByID(id) {
        this.employees = this.employees.filter(emp => emp.getID() !== id);
    }

    getAllEmployees() {
        return this.employees;
    }

    getEmployeeByID(id) {
        return this.employees.find(emp => emp.getID() === id);
    }
    getEmployeeByName(name) {
        return this.employees.filter(emp => emp.getName() === name);
    }

    getEmployeeByEmail(email) {
        return this.employees.filter(emp => emp.getEmail() === email);
    }

    getEmployeeByPosition(position) {
        return this.employees.filter(emp => emp.getPosition() === position);
    }
};

class Employee {
    constructor(name, email, salary, position) {
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.position = position;
    }

    getDetails() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            salary: this.salary,
            position: this.position
        };
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getSalary() {
        return this.salary;
    }

    getPosition() {
        return this.position;
    }
}

const myEmployees = table_Employees.map(emp => new Employee(
    emp.name,
    emp.email,
    emp.salary,
    emp.position
));

const myEmployeesTable = new Employee_Table(myEmployees);
console.log(myEmployeesTable.getAllEmployees());

console.log("--------   BY ID   --------");
console.log(myEmployeesTable.getEmployeeByID(myEmployees[0].getID()));
console.log("--------- BY NAME   -------");
console.log(myEmployeesTable.getEmployeeByName("Jane Smith"));
console.log("--------- BY EMAIL -------");
console.log(myEmployeesTable.getEmployeeByEmail("jane.smith@example.com"));
console.log("--------- BY POSITION -------");
console.log(myEmployeesTable.getEmployeeByPosition("Intern"));

console.log("-----------------------");
console.log("Getting a subtable and then filtering by position:");
const subTable = new Employee_SubTable(myEmployees);
const subTable1 = new Employee_SubTable(subTable.getEmployeeByPosition("Intern"));
console.log(subTable.getEmployeeByPosition("Alice Johnson"));
