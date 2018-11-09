const pg = require("pg");
const client = new pg.Client("posgres://localhost/wikistack");

client.connect();

module.exports = client;