const express = require("express");

const app = express();

// console.log(app);
let port = 3000;

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})


/*


app.get("/", (req, res)=>{
    res.send("you contacted root path");        // isee hum path bana skte hain url mein
});

app.get("/apple",(req, res)=>{
    res.send("you contacted apple path")
});

app.get("/orange",(req, res)=>{
    res.send("you contacted orange path")
});

app.get("*",(req, res)=>{
    res.send("this path not exist");
});

// app.post("/",(req, res)=>{
//     res.send("you sent a post request");
// });

/*
app.use((req, res)=>{
    console.log("new incoming request");
    // res.send("this is a basic response", {name: "apple", color: "red blue"});
    let fruits = res.send("<h1>Fruits</h1><ul><li>apple</li><li>orange</li></u>");
    res.send({name: "apple", color: "red"});
    res
    
});

*/


// PATH PARAMETER

app.get("/:username/:id", (req,res)=>{
    let {username, id} = req.params;             // username, id ye variable hain store ho jayega
    let htmlstr = `<h1>Welcome to the page of @${username}</h1!`;
    res.send(`welcome to the page of @${username}.`);
    res.send(htmlstr);
});


app.get("/search",(req, res)=>{
    console.log(req.query);       //request mein aata hain request se query stirng mein save ho jata hain
    let {q} = req.query;
    req.send(`<h1>search results for qeury: ${q}</h1>`);
    // req.send("no result");
})



