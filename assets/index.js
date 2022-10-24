// Packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utilities/generateMarkdown");

// An array of questions for user input

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter a valid title for your project.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Please describe your project.",
    name: "description",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log(
          "Please enter a valid description for your project."
        );
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Please describe the steps required to install your project.",
    name: "installation",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log(
          "If no steps are required for installation, enter 'N/A'."
        );
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message:
      "Please provide instructions and examples on how to use your project.",
    name: "usage",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Not a valid answer. Please try again!");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message:
      "Please credit anyone who contributed on your project. If you used any third-party assets or followed tutorials, include them here as well.",
    name: "contributing",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("If you have nothing to input here, enter 'N/A'.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message:
      "If applicable, please provide any tests written for your application.",
    name: "tests",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("If you have nothing to input here, enter 'N/A'.");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your GitHub username (no '@' needed)?",
    name: "github",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Not a valid answer. Please try again!");
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Not a valid answer. Please try again!");
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    message: "Please choose a license for your project.",
    choices: [
      "Apache 2.0 License",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause Simplified License",
      "BSD 3-Clause New or Revised License",
      "Boost Software License 1.0",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "None",
    ],
    name: "license",
  },
];

// Function to write README file
function writeReadMe() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    const myMarkdown = markdown(responses.license);
    fs.writeFile(
      "newREADME.md",
      `# ${responses.title}

            ## Description
            ${responses.description}
            ## Table of Contents
            1. [Installation](#installation) 
            2. [Usage](#usage)
            3. [Contributing](#contributing)
            4. [Tests](#tests)
            5. [Questions](#questions)
            ## Installation 
            ${responses.installation}
            ## Usage 
            ${responses.usage}
            ## Contributing 
            ${responses.contributing}
            ## Tests 
            ${responses.tests}
            ## Questions
            ### GitHub
            [GitHub](https://www.github.com/${responses.github}) 
            ### Email
            ${responses.email}
            ${myMarkdown}`,
      function (err) {
        if (err) throw err;
        console.log("README created!");
      }
    );
  });
}

// Function call to initialize app
writeReadMe();
