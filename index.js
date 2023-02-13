const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const inquirer = require('inquirer')


//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const managersQuestions =[
    {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'empID',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
    {
      type: 'input',
      message: 'What is your office number',
      name: 'officeNumber',
    },
  ]

  function askManagerquestions (){
inquirer.prompt(managersQuestions).then(answers =>{
    let {empID,email,name,officeNumber}= answers;
    let managerobj=new Manager(name, empID, email,officeNumber)
})
  }

//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
  const interQuestions =[
    {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'empID',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
    {
      type: 'input',
      message: 'What is your school name',
      name: 'school',
    },
  ]

  function askInterquestions (){
    inquirer.prompt(interQuestions).then(answers=>{
        let {empID,email,name,school}= answers;
        let internobj=new Intern(name, empID, email,school)
    })
  
  }

  const engineerQuestions =[
    {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'empID',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
    {
      type: 'input',
      message: 'What is your github',
      name: 'github',
    },
  ]

  function askEngineerquestions (){
    inquirer.prompt(engineerQuestions).then(answers=>{
        let {empID,email,name,github}= answers;
        let engineerobj=new Engineer(name, empID, email,github)
    })
  }