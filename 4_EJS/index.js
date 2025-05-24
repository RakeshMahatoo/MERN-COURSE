


const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// Set the views directory (correct key: "views")
app.set("views", path.join(__dirname, "/views"));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Route to render EJS file
app.get("/", (req, res) => {
  res.render("home.ejs"); // No need for ".ejs", Express handles it
});

// Instagram EJS
/*
app.get("/ig/:username", (req, res)=>{
      const followers = ["adam","bob","steve","abc"]
      let {username} = req.params;
      console.log(username);
      res.render("instagram.ejs",{username,followers});
})
*/

// create data base for dog and cat for ejs file

app.get("/ig/:username",(req, res)=>{
       const instaData = require("./data.json")  // require krna hoga data ko first: json ka sara data instaData k pass hain
       let {username} = req.params;
     const  data = instaData[username];
      
      res.render("instagram.ejs",{data});   // data key hain instaData ko username hain specifi wohi data jayega
      console.log(data);
})




// Another route example
app.get("/home", (req, res) => {
  res.send("This is the home route");
});
// role dice 

app.get("/rolldice", (req,res)=>{
      let diceValue =  Math.floor(Math.random()*6)+1 ;
      res.render("roledice.ejs", {diceValue});   // man lete hain humra data data base se aa rha hain ye data base man lo--- num: ho hain ye key hain diceValue--> ye value hain

})

// Start the server
app.listen(port, () => {
  console.log(`Listening on port number: ${port}`);
});
