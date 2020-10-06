class Employee {
    constructor(name, title, salary, boss) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
    }

    bonus(multiplier) {
        return this.salary * multiplier;
    }

}

const Lily = new Employee("Lily", "TA", 90000, "Susie");
const Clifford = new Employee("Clifford", "TA", 90000, "Susie")

// console.log(Lily.bonus(0.05))

//export employees.js
module.exports.Employee = Employee;
//module.exports = { Employee }

