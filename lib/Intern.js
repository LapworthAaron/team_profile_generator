const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;
    }

    getRole() {
        // return name of class
        return this.constructor.name;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;