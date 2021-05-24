const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')


async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const input = await inputForm(model)
        const updatedModel = update(input["input1"],input["input2"], input["input3"],input["input4"], model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}