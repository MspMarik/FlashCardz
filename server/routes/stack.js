const express = require("express");
const router = express.Router();
const data = require("../data/stack");
const app = express();
const axios = require("axios");
const path = require("path");
///////////////////////////////////////////////////////////////////////////////////////
router.post("/:id", async (req, res) => {
    let body = req.body;
    let id = req.params.id;
    if (!body) {
        return res.status(400).json({ error: "Error: There is no data" });
    }
    let userId = id;
    let stack = body.stack;
    let title = body.title;

    try {
        const returnVal = await data.createStack(userId, title, stack);
        res.status(200).json(returnVal);
    } catch (e) {
        res.status(400).json({ error: e });
        console.log(e);
    }

    //data.create
    //res status whatever create returns
    //catch like prof in database
});
router.get("/", async (req, res) => {
    let body = req.body;
    if (!body) {
        return res.status(400).json({ error: "Error: There is no data" });
    }
    try {
        let result = await data.getAll();
        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).json({ error: "Error: Get all sets don't failed" });
    }
});
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let result = await data.getStack(id);
        return res.status(200).json(result);
    } catch (e) {
        res.status(400).json({ error: "Error: With the data function" });
    }
});

module.exports = router;
