const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        // return name of class
        return this.constructor.name;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;