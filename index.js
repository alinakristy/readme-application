const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "Write your title:",
        validate: (input) =>
            input == "" ? false : true
    },
    {
        type: "input",
        name: "description",
        message: "Write a project description:",
        validate: (input) =>
            input == "" ? false : true
    },
    {
        type: "input",
        name: "instalation",
        message: "Write a project instalation steps(coma-separated): ",
    },
    {
        type: "input",
        name: "usageInformation",
        message: "Write usage steps(coma-separated): ",
    },
    {
        type: "list",
        name: "license",
        message: "Choose the license: ",
        //https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#how-to-apply-a-license-to-your-project
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'none'],
        default: 'MIT'
    },
    {
        type: "input",
        name: "contribution",
        message: "Write a contribution guideline: ",
        default: 'No contribution guideline provided'
    },
    {
        type: "input",
        name: "tests",
        message: "How to run tests: ",
        default: 'N/A',
    },
    {
        type: "input",
        name: "git",
        message: "Write you GitHub user name: ",
    },
    {
        type: "input",
        name: "email",
        message: "Write your email address: ",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('completed saving file ' + fileName)
    );
}

// function to initialize program
function init() {
    const fileName = process.argv[2];
    //when user forget to add filename 
    if (fileName == undefined) {
        console.log("you did not provide file name ,please execute the comand in folowing format")
        console.log('node index.js filename.md')
        return;
    }
    //ask user Questions 
    inquirer.prompt(questions)
        .then(response => {
            const markdown = generateMarkdown(response);
            writeToFile(fileName, markdown)
        })

}

// function call to initialize program
init();
