const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path"); // Add this line to require 'path'
const methodOverrider = require("method-override");

// install ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// =========================================
app.set(methodOverrider("_method"));
app.use(express.urlencoded({ extended: true }))
// ===============================================

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "rakesh@2002",
});

let getRandomUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};



let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for (let i = 0; i <= 100; i++) {
  data.push(getRandomUser());
}

// ========================
try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log(q);
    console.log(data);
  });
} catch (err) {
  console.log("this is error in getting data fetch from server", err);
}
// ===============================
connection.end();

//===============ROUTING START================
let port = 3000;
app.listen(port, () => {
  console.log('App listening on port 3000!');
});

//======================ROUTING START===============
// fetch and show total number of users on the app  
// app.get("/",(req,res)=>{
//   let q = `SELECT COUNT(*) FROM user`;
//   try{
//     connection.query(q,(err,result)=>{
//       if(err) throw err;
//       let count = result[0]["count[0]"];
//       res.render("home.ejs",{count});
//     });
//   } catch(err){
//     res.send("send error occurred");
//   }
// });


app.get("/", (req, res) => {
  let q = `select count(*) from user)`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count[0]"];
      console.log(count);
      res.render("home.ejs", { count });
      res.redirect("/user") // count ko pass krwa dya ye count value html page mein recive krwa dene
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});



// User route

app.get("/user", (req, res) => {
  // res.send("this is user data");
  let q = `select * from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let users = result;
      res.render("users.ejs", { users });
    });
  }
  catch (e) {
    console.log("user data not found DB error");
    res.send("user not found DB error")
  }
});


// user/id/edit route ========edit route============IT CREATE EDITE FORM


app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;
  console.log(id);
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let editData = result[0];
      res.render("edit.ejs", { editData });
    })
  }
  catch (err) {
    res.send("user id not found to edit");
  }

});



//=========UPDATE ROUTE============

app.patch('/user/:id', (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;
  let { password: formPass, username: newUsername } = req.params;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let editData = result[0];
      if (formPass != user.password) {
        res.send("wrong password");
      }
      else {
        // upadate query
        let q2 = `UPDATE user SET username=${newUsername} where id='${id}'`;
        connection.query(q2, (err, result) => {  // after written query we need to establish connection with data base;
          if (err) throw err;
          res.redirect("/user");
        });
      }

    });
  }
  catch (err) {
    res.send("user id not found to edit");
  }

});