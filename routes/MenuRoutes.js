import express from 'express';
import Menu from '../Models/MenuItem.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = req.body
        const menuItem = new Menu(data);
        const savedMenuItem = await menuItem.save();
        res.status(201).json(savedMenuItem);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

})

router.get('/', async (req, res) => {
    try {
        const data = await Menu.find({});
        console.log('fetched data'); 
        res.json(data);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
 
})

export default router;