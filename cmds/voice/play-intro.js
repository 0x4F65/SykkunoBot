const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayIntroAudioCommand extends Commando.Command{
    constructor(client){
        super(client,{
            name: 'playintro',
            group: 'voice',
            memberName: 'playintro',
            description: 'What is up guys, Sykkuno here'
        })
    }
    async run(message){
        const {voice} = message.member

        if(!voice.channelID){
            message.reply('Uhhh you have to be in a voice channel to use this command')
            return
        }
        voice.channel.join().then((connection) => {
            connection.play(path.join(__dirname, 'Intro.m4a'))
        })
    }
     
}