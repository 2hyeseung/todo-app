// 라우터 & 컨트롤러
const express = require("express");
const { Todo } = require("../models");
const router = express.Router();

// GET localhost:PORT/todos - show all todos (READ)
router.get("/todos", async (req, res) => {
    try {
        let data = await Todo.findAll();
        res.send(data);
    } catch (err) {
        res.send(err);
    }
    // Todo.findAll().then((data) => {
    //     res.send(data);
    // });
});

router.post("/todo", async (req, res) => {
    try {
        let newTodo = await Todo.create({
            title: req.body.title,
        });
        res.send(newTodo);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
