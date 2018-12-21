const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

client.on('message', msg => {
  if (msg.content === '#test') {
    msg.channel.send('Test Successful');
    msg.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
  }
});


client.login(process.env.NTI1NDg3MDA3MDE5ODI3MjI3.Dv7r_w.WhknFFFe2BjYmdDnD0v7YNXwx_8); 
client2.login(process.env.NTI1NjMwNjg2NDMxMDE5MDEx.Dv7smQ.WUk1T4nIjY98w7jsIE9jDFV7na8); 
client3.login(process.env.NTI1NjMxNTk5NjAyMzAyOTk3.Dv7szw.I5z_8WVioicok5xO6bz3Mm9ZVGA); 
client4.login(process.env.NTI1Nzg3MDU5MzA3MTUxMzcy.Dv7tGQ.e-rx1fRULlogAqpoqcAtKt5-_WI); 
