//Imports
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

//conection string da mongoDB
const dbURI = 'mongodb+srv://joao:password1234@myblog.8313t.mongodb.net/MyBlogDB?retryWrites=true&w=majority';

//mongoose vai se conectar a DB
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((result) => app.listen(3000))  
    .catch((err) => console.log(err));

//registar view Engine (EJS)
app.set("view engine", "ejs");

//MIDDLEWARE
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

//Routes

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

//blog routes (que estao noutro ficheiro)
app.use("/blogs", blogRoutes); 

//se request não encontrar nenhum rota bate aqui
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
