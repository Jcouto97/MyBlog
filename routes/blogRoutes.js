//Rotas provenientes de "/blogs" do app.js
const express = require("express");

//criar nova instancia para podermos trocar todas as app por router e liga-lo ao express
const router = express.Router();

const blogController = require("../controllers/blogController");

router.get("/", blogController.blog_index);

router.post("/", blogController.blog_create_post);

router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);

router.delete("/:id", blogController.blog_delete);

//exportar para usar na app.js
module.exports = router;