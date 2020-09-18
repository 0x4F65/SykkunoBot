const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class GotLuckyAudioCommand extends Commando.Command{
    constructor(client){
        super(client,{
            name: 'lucky',
            group: 'voice',
            memberName: 'lucky',
            description: 'I just got lucky you know'
        })
    }
    async run(message){
        const {voice} = message.member

        if(!voice.channelID){
            message.reply('Uhhh you have to be in a voice channel to use this command')
            return
        }
        voice.channel.join().then((connection) => {
            connection.play(path.join(__dirname, 'justgotlucky.m4a'))
        })
    }
     
}