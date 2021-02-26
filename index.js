const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//Description
//Table of Contents
//Usage
//License
//Contributing
//Tests
//Questions


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the Project Title?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Give a description of the project',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What is the Usage of this project?',
    },
    {
      type: 'checkbox',
      name: 'License',
      message: 'Would you like to apply a license?',
      choices:
      ["",
      "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)",
      "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
      "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
      "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)",
      "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)",
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
      ]
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who contributed on this project',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Insert Test links here',
    },
    {
    type: 'input',
    name: 'Questions',
    message: 'Enter your Github Username',
    },
    {
      type: 'input',
      name: 'Questions2',
      message: 'Please enter your Email',
      },
  ]);
};

const generateReadme = (answers) =>
`  
  ${answers.License}
  > # **${answers.Title}**


  > ## *Table of Contents*
  - [Description](#Description)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  > ## *Description*
      ${answers.Description}
  > ## *Usage*
      ${answers.Usage}
  > ## *Contributing*
      ${answers.Contributing}
  > ## *Tests*
      ${answers.Tests}
  > ## *Questions* 
      GitHub Username: ${answers.Questions}
      My Email: ${answers.Questions2}

      Reach me here with any additional questions.
`   

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote README.md'))
    .catch((err) => console.error(err));
};

init();

