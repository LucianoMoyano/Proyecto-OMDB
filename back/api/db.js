const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("omdb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
 
 

/* 
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/omdb",{ logging: false })

module.exports = db; */