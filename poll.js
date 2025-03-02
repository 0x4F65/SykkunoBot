//basic callback which will take back a client
module.exports = client => {
    const channelIds = [//'channelID',
]
const addReactions = message =>{
    message.react('👍')

    setTimeout(() => {
        message.react('👎')
    }, 750) 
}
client.on('message', async message =>{
    if(channelIds.includes(message.channel.id)){
        addReactions(message)
    }
    else if(message.content.toLowerCase() === '-poll'){
        await message.delete()

        const fetched = await message.channel.messages.fetch({ limit: 1 })
        if(fetched && fetched.first()){
            addReactions(fetched.first()) //get first item in collection
        }
    }
})

} 