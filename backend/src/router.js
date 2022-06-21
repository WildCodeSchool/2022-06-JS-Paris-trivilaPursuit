const express = require("express");

const { ItemController } = require("./controllers");

const router = express.Router();

//router.get("/items", ItemController.browse);
router.get("/questions", ItemController.getQuestions);
// la route des questions : "http://localhost:5000/questions"
// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
