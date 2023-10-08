const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection=require("./mongodb")
app.use(express.json());
app.set("view engine", "hbs");
const templatepath = path.join(__dirname, '../templates');
app.set("views", templatepath);
app.use(express.urlencoded({extended:false}))


app.get("/", (req, res) => {
    res.render("login");
})
app.get("/signup", (req, res) => {
    res.render("signup");
});
app.post("/login", async (req,res)=>{
const data={
    name:req.body.name,
    password:req.body.password,
    email:req.body.email
}
await collection.insertOne(data);
res.render("home");
})

app.listen(5000, () => {
    console.log("connected to port");
});
