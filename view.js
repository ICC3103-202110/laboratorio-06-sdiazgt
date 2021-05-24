const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Unit Converter',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {leftValue: leftValue,leftUnit: leftUnit,rightValue: rightValue,rightUnit: rightUnit}

    ]
}

function inputForm(model){
    const {source,} = model
    const choices = ['Celsius', 'Fahrenheit','Kelvin']
    const message = 'Left temperature is source?'
    const message2 = 'Temperature value to convert?'
    const message3 = 'From?'
    const message4 = 'To?'
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input',
            message: message,
            default: 'Y/n',
            validate: function(value){
                if(value === 'y' || value === 'n'){
                    return true
                } else {
                    return 'Enter lower case y or n'
                }
            }
        },
        {
            name: 'input2',
            type: 'input',
            message: message2,
            default: 0,
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Enter valid number'
                }
            }
        },
        {
            name: 'input3',
            type: 'list',
            message: message3,
            default: 0,
            choices: choices
        },
        {
            name: 'input4',
            type: 'list',
            message: message4,
            default: 0,
            choices: choices
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}