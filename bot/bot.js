
const fs = require('fs');
const mysql = require('mysql');
const Discord = require('discord.js');
const { config } = require('./config.json');

var con = mysql.createConnection({
  host: config.host,
  user: config.db_user,
  password: config.db_pass,
  database: "bots"
});

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Your Favorite Songs', { type: 'LISTENING' });
});

con.connect(function(err) {
  if (err) throw err;
  
  var sql = `ALTER TABLE bots
  ADD ${client.user.id} INT NULL;`
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`Column created: ${client.user.id}`);
  });
});
client.login(config.token);
