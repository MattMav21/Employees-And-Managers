//import employees
const Employee = require('./employees').Employee

class Manager extends Employee {
    constructor(name, title, salary, boss, employees) {
        super(name, title, salary, boss);
        this.employees = employees;
    }

    bonus(multiplier) {
        
    }

    totalSubsalary() {
        // let total = this.employees.reduce((sum, employee) => {
        //     console.log(employee);
        //     // sum += employee.salary;
        //     // return sum;
        // })
        // return total;

        let total = 0;
        for (let i = 0; i < this.employees.length; i++) {
            let employee = this.employees[i];

            if (employee instanceof Manager) {
                total += employee.salary;
                total += employee.totalSubsalary();
            } else {
                total += employee.salary;
            }
        }

        return total;
    }
}

const Lily = new Employee("Lily", "TA", 90000, "Susie");
const Clifford = new Employee("Clifford", "TA", 90000, "Susie")
const Susie = new Manager("Susie", "TA Manager", 100000, "Calvin", [Lily, Clifford])
const Calvin = new Manager("Calvin", "Director", 130000, "Hobbes", [Susie])
const Hobbes = new Manager("Hobbes", "Founder", 1000000, null, [Calvin])

console.log( Hobbes.totalSubsalary() );// What we want: 280000