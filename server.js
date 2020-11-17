const express = require ("express");
const exphbs = require('express-handlebars')
const burger = require( './controllers/burgers_controller.js' );
const PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(burger);

app.listen(PORT, function () {
    console.log("Serving burgers on PORT " + PORT);
});
