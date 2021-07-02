// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?(Required)',
        validate: nameInput => {
            if(nameInput){
                return true;
            }
            else{
                console.log("Please enter a title");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project (Required)',
        validate: nameInput => {
            if(nameInput){
                return true;
            }
            else{
                console.log("Please enter a description of your project");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'installation',
        message: 'Is there anything required for installation?',
        default: false
    },
    {
        type: 'input',
        name: 'step',
        message: "What's the next step in installing this project?",
        when:({installation}) =>{
            if(installation){
                return true;
            }
            else{
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "What licensing would you like to use?",
        choices: ['MIT','Mozilla','WTFPL','None']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors to this project?'
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        writeToFile("readme.md", markdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();
