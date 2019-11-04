import discord from 'discord.js'
const client = new discord.Client()
const pkg = require('../package.json')

require('dotenv').config()

const main = () => {
  if (!process.env.BOT_TOKEN) throw new Error('❌ BOTトークンが入力されていません。')
  if (!process.env.CHANNEL_ID) throw new Error('❌ チャンネルIDが入力されていません。')

  client.login(process.env.BOT_TOKEN).catch(err => console.error(err))

  client.on('ready', () => {
    console.log('✔ 準備完了')
    client.user.setActivity(`v${pkg.version}`, { type: 'PLAYING' })
  })

  client.on('message', msg => {
  })

  client.on('error', err => console.error(err))
}

main()
