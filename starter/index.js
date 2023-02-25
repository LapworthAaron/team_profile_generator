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

// TODO: init function that calls manager func
init = () => {
    managerFunc();
}


// TODO: manager func that calls inquirer then calls holding menu
managerFunc = () => {
    let theManager = {};

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
                validate(name) {
                    if(!/[a-zA-Z]+$/.test(name)) {
                        return "Please only use letters";
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: 'What is your employee ID?',
                name: 'id',
                validate(id) {
                    if(/[a-zA-Z]+$/.test(id)) {
                        return "Please only use numbers";
                    }
                    return true
                }
            },
            {
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
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'office',
                validate(office) {
                    //simple validation, as emails are super complicated to validate
                    if(/[a-zA-Z]+$/.test(office)) {
                        return "Please only use numbers"
                    }
                    return true
                }
            }
        ])
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
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: 'option',
                choices: [
                    "Add an Engineer",
                    "Add an intern",
                    "Finish building the team"
                ]
            },
        ])
        .then((response) => {
            if (response.option == "Add an Engineer") {
                engineerFunc();
            } else if (response.option == "Add an Intern") {
                // internFunc();
                console.log(response.option);
            } else {
                // render();
                console.log(response.option);
            }
        }

        )
}


// TODO: engineer func that calls inquirer for engineer then holding menu
engineerFunc = () => {
    let theEngineer = {};

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
                validate(name) {
                    if(!/[a-zA-Z]+$/.test(name)) {
                        return "Please only use letters";
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: 'What is your employee ID?',
                name: 'id',
                validate(id) {
                    if(/[a-zA-Z]+$/.test(id)) {
                        return "Please only use numbers";
                    }
                    return true
                }
            },
            {
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
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'github',
                validate(github) {
                    //simple validation, as emails are super complicated to validate
                    if(!/[a-zA-Z]+$/.test(github)) {
                        return "Please only use numbers"
                    }
                    return true
                }
            }
        ])
        .then((response) => {
            theEngineer = new Engineer(response.name,response.id,response.email,response.github);
            console.log('Success!');
            console.log(theEngineer);
            menuFunc();
        });
}


// TODO: intern func that calls inquirer for intern then holding menu

// TODO: render func that calls the render jazz


init();