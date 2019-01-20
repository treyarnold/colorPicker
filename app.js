const   express = require("express"),
        app     = express(),
        port    = 3000;

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs")
});

app.listen(port, () => console.log(`Colot picker app listening on port ${port}!`));