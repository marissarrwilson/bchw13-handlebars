const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const router = express.Router();
const path = require("path");
const Burger = new (require('../models/burger.js'))();

router.get("/", async function(req, res) {
    try {
    const result = await Burger.listBurgers();  
    res.render("index", { burgers: result });
    } catch (error) {
        console.error(error)
    }
});

router.post("/api/burgers",async function(req,res){
    try {
    const burgerName = req.body.burger_name;
    const result = await Burger.submitBurger(burgerName);
    res.send({result});
    } catch (error) {
        console.error(error)
    }
});

router.put("/api/burgers/:id", async function(req,res){
    try {
    const burgerID = req.params.id;
    //console.log(burgerID);
    const devoured = req.body.devoured;
    const result = await Burger.devourBurger(burgerID, devoured);
    res.json(result);
    } catch (error) {
        console.error(error)
    }
});

module.exports = router;