const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));  //post use krne k liye standard formate likhna hoga// ye incode data padega
app.use(express.json()); // ye json data ko read kr payega//


app.get("/register",(req,res)=>{
    let {user, password} = req.query;     //req.query krk hum data ko nikal skte hain

    console.log("accepted");
    res.send(`standard GET response. Welcome @${user}`);
});

app.post("/register",(req,res)=>{            // register route define kya hian
    console.log(req.body);                     // data hain request.body k under lakin express ko samz nhi aa rha usek liye hmme parse krna parega
          let {user, password} = req.query; 
          res.send(`standard GET response. Welcome @${user}`);
    // res.send("Standard POST Response")
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

