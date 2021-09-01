const aoijs = require("aoi.js")
const fs = require('fs')
const config = require("./config.json")

const bot = new aoijs.Bot({
token: "token", //Discord Bot Token
prefix: "$getServerVar[prefix]", //Discord Bot Prefix
mobile: true
})
bot.onMessage() //Allows to execute Commands

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]
    Bot is on: $serverCount servers!` //Example Ready on Client
})

bot.loadCommands(`./commands/`)

bot.variables({
    prefix: "js.",
    })

    bot.status({
        text: "javascripta",
        type: "WATCHING",
        time: 12,
        url: "https://twitch.tv/help"
      })