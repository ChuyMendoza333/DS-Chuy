const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.send("<h1> Not a rederable API </h1>");
});

app.post("/login", (req, res) =>{
    var user = req.body.user;
    var pass = req.body.password;
    console.log("Hit backend: " + user + ":" + pass);
    var response = {
        user : user,
        access : "Denied",
        authorization: -1
    }
    if(user === "Santiago" && pass === "123"){
        console.log("You are logged in");
        response.access = "Granted";
        response.authorization = 1;

    }         
    res.json(response);

    
})

app.listen(5000, () => {
    console.log("Listening on port 5000");
});