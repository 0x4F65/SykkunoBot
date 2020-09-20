
const path = require('path')
const Commando = require('discord.js-commando')


const config = require('./config.json'); //Hide token
const command = require('./command');

const poll = require('./poll') 
const sendMessage = require('./send-message')

const client = new Commando.CommandoClient({
    owner: config.botOwner,
    commandPrefix: config.prefix,
    disableEveryone: true,
    unknownCommandResponses: false,

})

client.on('ready', () => {
    console.log('Um I think the client is ready')
    
    //COMMANDO
    client.registry
    .registerGroups([
        ['misc','misc commands'],
        ['voice','voice commands']
    ])
    .registerCommandsIn(path.join(__dirname, 'cmds'))

    //poll command
    poll(client)
    //Temp messages
    const guild = client.guilds.cache.get(config.serverId)
    const channel = guild.channels.cache.get(config.channelId)

    //To be cleaned up
    sendMessage(channel, 'SykknoBot is starting up...', 5)



    command(client, 'servers', message =>{
        client.guilds.cache.forEach(guild =>{
            message.channel.send(`Umm this place ${guild.name} has ${guild.memberCount} people in here. I-I hope you uh enjoy your stay but if you can leave any time you want...`)
        
        })
    })

    command(client, ['cc','clearchannel'], message =>{
        if(message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch().then(results =>{
                 message.channel.bulkDelete(results)
            })
        }
    })

    command(client, 'status', message =>{
        message.channel.send("I'm just a bot minding my own business...")
    })

    //Help information
    command(client, 'help', message =>{
        message.channel.send(`
        T-This is the help menu. I uhh hope this helps :)

        **-help** - KEKW
        **-intro** - SykkunoBot intro
        **-servers** - server info
        **-cc** - clear channel (admin only)
        `)
    })


    //Help status on bot
       const { prefix } = config
       client.user.setPresence({
           activity: {
               name:`type "${prefix}help" for help`,
           },
       }) 
})

client.login(config.token)