import express from 'express'

const router = express.Router();
import Products from '../models/Products.js';

router.post('/addProducts', async (req, res) => {
    try {
        const product = req.body;
        console.log(product);

        const newProduct = new Products(product);
        await newProduct.save();
        res.status(201).json(`Products added successfully`);

    } catch (error) {
        console.log(error)
        res.status(500).json(`Internal server error`)
    }
})

router.get('/getProducts', async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (error) {
        console.log(error)
        res.status(500).json(`Internal server error`)
    }
}
)

export default router;