

import express from 'express';
import { user } from '../model/User.js';

const route = express.Router();

route.use(express.json());

route.get("/user", async (req, res) => {
    try {
        const data = await user.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

route.post("/user", async (req, res) => {
    try {
        const data = new user(req.body);
        await data.save();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default route;