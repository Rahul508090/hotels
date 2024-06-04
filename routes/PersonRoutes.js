import express from 'express';
import { Person } from '../models/Person.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const person = new Person(req.body);
        const saveperson = await person.save();
        console.log(saveperson);
        res.status(201).json(person);
    } catch (err) {
        res.status(400).json({ message: 'Error in creating person' });
    }
})



router.get('/', async (req, res) => {
    try {
        const menu = await Person.find({});
        res.status(200).json(menu);
    } catch (err) {
        res.status(400).json({ message: 'Error in getting menu' });
    }
})

router.get('/:work', async (req, res) => {
    try {
        const work = req.params.work;
        if (work === 'chef' || work === 'waiter' || work === 'manager') {
            const person = await Person.find({ work: work });
            res.status(200).json(person);
        } else {
            res.status(404).json({ message: 'Invalid work' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error in getting person' });
        console.log(err);
    }
})


export default router;