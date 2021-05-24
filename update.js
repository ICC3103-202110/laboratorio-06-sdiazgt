//const { right } = require("inquirer/lib/utils/readline")
function celsiusToFaren(input2){
    return (Number(input2)*(9/5) + 32)
}

function celsiusToKelvin(input2){
    return (Number(input2) + 273.15)
}

function farenToCelsius(input2){
    return ((Number(input2)-32)*(5/9))
}

function farenToKelvin(input2){
    return ((Number(input2)-32)*(5/9) + 273.15)
}

function kelvinToCelsius(input2){
    return (Number(input2) - 273.15)
}
function kelvinToFaren(input2){
    return ((Number(input2)-273.15)*(9/5) + 32)
}

function update(input1,input2,input3,input4,model){
    let newNumber = 0
        if(input3==='Celsius'){
            if(input4==='Fahrenheit'){
                newNumber = celsiusToFaren(input2)
            }
            else if(input4==='Kelvin'){
                newNumber = celsiusToKelvin(input2)
            }
        }
        else if(input3==='Fahrenheit'){
            if(input4==='Celsius'){
                newNumber = farenToCelsius(input2)
            }
            else if(input4==='Kelvin'){
                newNumber = farenToKelvin(input2)
            }
        }
        else if (input3==='Kelvin'){
            if(input4==='Celsius'){
                newNumber = kelvinToCelsius(input2)
            }
            else if(input4==='Fahrenheit'){
                newNumber = kelvinToFaren(input2)
            }
        }
        if(input3===input4 && input1==='n'){
            return {
                ...model,
                rightUnit: input3,
                rightValue: input2,
                leftUnit: input4,
                leftValue: input2,
                }
        }
        else if(input3===input4 && input1==='y'){
            return {
                ...model,
                rightUnit: input4,
                rightValue: input2,
                leftUnit: input3,
                leftValue: input2,
                }
        }
        else if(input1==='n'){
            return {
            ...model,
            rightUnit: input3,
            rightValue: input2,
            leftUnit: input4,
            leftValue: newNumber,
            }
        }
        else{
            return {
            ...model,
            rightUnit: input4,
            rightValue: newNumber,
            leftUnit: input3,
            leftValue: input2,
            }
        } 
}

module.exports = {
    update
}