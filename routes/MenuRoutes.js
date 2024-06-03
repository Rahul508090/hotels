import express from 'express';
import { Menu } from '../models/Menu.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const menu = new Menu(req.body);
        const savemenu = await menu.save();
        console.log(savemenu);
        res.status(201).json(menu);
    } catch (err) {
        res.status(400).json({ message: 'Error in creating menu' });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const menu = await Menu.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        console.log("Update Menu", menu);
        res.status(200).json(menu);

        if (!menu) {
            res.status(404).json({ message: 'Menu not found' });
        }
    } catch (err) {
        res.status(400
        ).json({ message: 'Error in updating menu' });
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const menu = await Menu.findByIdAndDelete(id);
        console.log("Delete Menu", menu);
        if (!menu) {
            res.status(404).json({ message: 'Menu not found' });
        }
        res.status(200).json({ message: 'Menu deleted successfully' });
    }
    catch (err) {
        res.status(400).json({ message: 'Error in deleting menu' });
        console.log(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const menu = await Menu.find({});
        res.status(200).json(menu);
    } catch (err) {
        res.status(400).json({ message: 'Error in getting menu' });
    }
})

export default router;