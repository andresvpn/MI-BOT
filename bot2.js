const start_bot2 = async () => {
const { Telegraf } = require('telegraf');
const fs = require('fs');

const token = '7240573902:AAFEl_SPVEqba4pCPU0CCUvl_pzuHQXiqqA'; // Reemplaza con tu token de bot
const bot = new Telegraf(token);

function generateURL(key) {
  const encodedKey = Buffer.from(key).toString('base64');
  return `https://vpn-movie-ofc.blogspot.com/2024/05/embed_27.html?r=${encodedKey}`;
}

bot.start((ctx) => {
  ctx.reply('¡Bienvenido! Envía una url de streamwish para generar una nueva sin ads🚫');
});

bot.on('text', (ctx) => {
  const key = ctx.message.text;
  if(key.includes("https://")){
  const url = "https://andresvpn.github.io/VPN-MOVIE/embed?file="
  const generatedURL = generateURL(url + key);
  ctx.reply("[❗] URL GENERADA:\n" + generatedURL + "\n\nBy: @ANDRES_VPN");
  } else {
  ctx.reply(`[❗] INGRESA UNA URL VÁLIDA\n\nBy: @ANDRES_VPN`);
  }
});

bot.launch().then(() => console.log('Bot iniciado'));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
} 
module.exports = start_bot2