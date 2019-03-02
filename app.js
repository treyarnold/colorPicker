var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs")
});

// Local server startup for testing
// app.listen(3000, function(){
// hosted server startup for deployment
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});