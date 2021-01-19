const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Epic'));
bot.command('tumae', (ctx) => ctx.reply('La tuya'));
bot.command('furry', (ctx) => ctx.reply('Unknown api: Have you considered commiting suicide?'));
bot.command('porno', (ctx) => ctx.reply('Unknown api: Have you considered commiting suicide?'));
bot.launch();
