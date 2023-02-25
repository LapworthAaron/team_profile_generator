const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// TODO: render
// TODO: dynamic instantiation object names


// init function that calls manager func
init = () => {
    managerFunc();
}

// reusable questions
const nameQ = {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
    validate(name) {
        if(!/[a-zA-Z]+$/.test(name)) {
            return "Please only use letters";
        }
        return true
    }
};

const idQ = {
    type: 'input',
    message: 'What is your employee ID?',
    name: 'id',
    validate(id) {
        if(/[a-zA-Z]+$/.test(id)) {
            return "Please only use numbers";
        }
        return true
    }
};

const emailQ = {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate(email) {
        //simple validation, as emails are super complicated to validate
        if(!/[@]/.test(email) || !/[.]/.test(email)) {
            return "Please enter a valid email address"
        }
        return true
    }
};

const officeQ = {
    type: 'input',
    message: 'What is your office number?',
    name: 'office',
    validate(office) {
        if(/[a-zA-Z]+$/.test(office)) {
            return "Please only use numbers"
        }
        return true
    }
};

const githubQ = {
    type: 'input',
    message: 'What is your github username?',
    name: 'github',
    validate(github) {
        if(!/[a-zA-Z]+$/.test(github)) {
            return "Please only use letters"
        }
        return true
    }
}; 

const schoolQ = {
    type: 'input',
    message: 'What school do you attend?',
    name: 'school',
    validate(school) {
        if(!/[a-zA-Z]+$/.test(school)) {
            return "Please only use letters"
        }
        return true
    }
}; 

const menuQ = {
    type: 'list',
    message: 'What would you like to do next?',
    name: 'option',
    choices: [
        "Add an Engineer",
        "Add an intern",
        "Finish building the team"
    ]
};


// manager func that calls inquirer then calls holding menu
managerFunc = () => {
    let theManager = {};

    inquirer
        .prompt([nameQ, idQ, emailQ, officeQ])
        .then((response) => {
            theManager = new Manager(response.name,response.id,response.email,response.office);
            console.log('Success!');
            console.log(theManager);
            menuFunc();
        });
}

// TODO: holding menu that display add engineer etc..., then calls the relevant function below
menuFunc = () => {
    inquirer
        .prompt([menuQ])
        .then((response) => {
            if (response.option == "Add an Engineer") {
                engineerFunc();
            } else if (response.option == "Add an intern") {
                internFunc();
                // console.log(response.option);
            } else {
                // render();
                console.log(response.option);
            }
        }

        )
}


// engineer func that calls inquirer for engineer then holding menu
engineerFunc = () => {
    let theEngineer = {};

    inquirer
        .prompt([nameQ, idQ, emailQ, githubQ])
        .then((response) => {
            theEngineer = new Engineer(response.name,response.id,response.email,response.github);
            console.log('Success!');
            console.log(theEngineer);
            menuFunc();
        });
}


// intern func that calls inquirer for intern then holding menu
internFunc = () => {
    let theIntern = {};

    inquirer
        .prompt([nameQ, idQ, emailQ, schoolQ])
        .then((response) => {
            theIntern = new Intern(response.name,response.id,response.email,response.school);
            console.log('Success!');
            console.log(theIntern);
            menuFunc();
        });
}

// TODO: render func that calls the render jazz


init();