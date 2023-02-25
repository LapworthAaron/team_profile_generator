const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github = github;
    }

    getRole() {
        // return name of class
        return this.constructor.name;
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;