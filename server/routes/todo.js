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

// PATCH localhost:PORT/todo/:todoId - edit a specific todo (UPDATE)
router.patch("/todo/:todoId", async (req, res) => {
    // 수정 성공시 [1], 수정 실패시 [0]
    try {
        let [isUpdated] = await Todo.update(
            {
                title: req.body.title,
                done: req.body.done,
            },
            {
                where: { id: req.params.todoId },
            }
        );
        if (!isUpdated) {
            return res.send(false);
        }
        res.send(true);
    } catch (err) {
        res.send(err);
    }
});

router.delete("/todo/:todoId", async (req, res) => {
    try {
        let isDeleted = await Todo.destroy({
            where: {
                id: req.params.todoId,
            },
        });
        if (!isDeleted) {
            return res.send(false);
        }
        res.send(true);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
