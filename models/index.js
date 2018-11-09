const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5433/wikistack');

module.exports = {
  db
}