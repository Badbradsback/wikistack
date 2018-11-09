const morgan = require("morgan");
const express = require("express");
const routes = require("./routes/route")
const { db } = require("./models");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ etended: false}));
app.use(express.json());

app.use('/', routes);

db.authenticate().
then(() => {
  console.log('connected to the database');
})


const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});