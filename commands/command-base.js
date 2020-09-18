const {prefix} = require('.../config.json')

module.export = (client, commandOptions) => {
    let {
        commands,
        expectedArgs = '',
        permissonError = 'Umm sorry you need permissions to use this command',
        minArgs = 0,
        maxArgs = null,
        permissions = [],
        requiredRoles = [],
        callback
    } = commandOptions

    if(typeof commands === 'string'){
        commands = [commands]
    }
    
}