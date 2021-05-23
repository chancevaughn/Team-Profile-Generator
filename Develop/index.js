const fs = require('fs')
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML')

let manager;
const teamMembers = [];

inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Whate is the team manager's name?",
        default: 'Chance'
    },
    {
        type: "input",
        name: "managerId",
        message: "Whate is the team manager's id",
        default: 21
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Whate is the team manager's email",
        default: 'me@me.com'
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "Whate is the team manager's office number?",
        default: 405
    },
]).then((answers) => {
    const { managerName, managerId, managerEmail, managerOfficeNumber } = answers;
    manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);

    addMember();
})

function addMember() {
    inquirer.prompt([
        {
            type: "list",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
            name: 'memberChoice',
            message: 'Who do you want to add?'
        }
    ]).then((answers) => {
        console.log(answers);
        switch (answers.memberChoice) {
            case 'Engineer':

                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the name?",
                        default: 'David'
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the id",
                        default: 32
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the email",
                        default: 'david@me.com'
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the github?",
                        default: "davidD",
                    },
                ])
                    .then((answers) => {
                        const { name, id, email, github } = answers;
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                        teamMembers.push(engineer);

                        addMember();
                    })



                break;
            case 'Intern':
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the name?",
                        default: 'John'
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "Whate is the id",
                        default: 2
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the email",
                        default: 'john@me.com'
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "Whate is the school?",
                        default: "smu",
                    },
                ])
                    .then((answers) => {
                        const { name, id, email, school } = answers;
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                        teamMembers.push(intern);

                        addMember();
                    })


                break;
            default:

                const data = {
                    manager: manager,
                    teamMembers: teamMembers
                }
                fs.writeFileSync('./dist/index.html', generateHTML(data))
        }
    })
}