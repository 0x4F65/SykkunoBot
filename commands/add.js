module.exports = {
    commands: ['add','addition'],
    expectedArgs: '<num1> <num2>',
    permissionError: '"Umm sorry you need permissions to use this command"',
    minArgs:2,
    maxArgs:2,
    callback: (message, arguements, text) => {

    },
    permissions: [],
    requiredRoles:[],
}