"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todo = [];
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).json({ todo: todo });
});
router.post('/todo', (req, res) => {
    const body = req.body;
    console.log(body.name, 'sending name form postman');
    const todonew = {
        id: new Date().getTime(),
        name: body.name
    };
    todo.push(todonew);
    console.log(todo);
    res.status(200).json({ message: 'success' });
});
router.post('/delete/:tid', (req, res) => {
    const param = req.params;
    const id = +param.tid;
    const find = todo.findIndex(e => e.id === id);
    if (find === -1) {
        return res.status(400).json({ message: 'item not found' });
    }
    todo = todo.filter(e => e.id != id);
    res.status(200).json({ message: 'item deleted', todo: todo });
});
router.put('/edit/:tid', (req, res) => {
    const param = req.params;
    const tid = +param.tid;
    const find = todo.findIndex(e => e.id === tid);
    if (find === -1) {
        return res.status(400).json({ message: 'item not found' });
    }
    todo[find] = { id: todo[find].id, name: req.body.name };
    res.status(200).json({ message: 'item edited', todo: todo });
});
exports.default = router;
