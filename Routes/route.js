const express = require("express");
const layout = require("../views/layout");
const router = express.Router();



router.get("/", (req, res, next) => {
    res.send(layout(''));
});






module.exports = router;