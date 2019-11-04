import discord from 'discord.js'
const client = new discord.Client()
const pkg = require('../package.json')

require('dotenv').config()

const main = () => {
  if (!process.env.BOT_TOKEN) throw new Error('❌ BOTトークンが入力されていません。')

  client.login(process.env.BOT_TOKEN).catch(err => console.error(err))

  client.on('ready', () => {
    console.log('✔ 準備完了')
    client.user.setActivity(`v${pkg.version}`, { type: 'PLAYING' })
  })

  client.on('message', msg => {
    if (msg.author.id === client.user.id) return
    if (msg.channel.type !== 'text') return

    if (msg.content === '\\vclink') {
      if (!msg.member.voiceChannelID) {
        msg.channel.send('VCに接続してからコマンド実行してね！')
        return
      }

      msg.channel.send(`https://discordapp.com/channels/${msg.guild.id}/${msg.member.voiceChannelID}`)
    }
  })

  client.on('error', err => console.error(err))
}

main()
