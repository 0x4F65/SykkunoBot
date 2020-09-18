const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class TipAudioCommand extends Commando.Command{
    constructor(client){
        super(client,{
            name: 'tip',
            group: 'voice',
            memberName: 'tip',
            description: 'm\'lady'
        })
    }
    async run(message){
        const {voice} = message.member

        if(!voice.channelID){
            message.reply('Uhhh you have to be in a voice channel to use this command')
            return
        }
        voice.channel.join().then((connection) => {
            connection.play(path.join(__dirname, 'tip.mp3'))
        })
    }
     
}