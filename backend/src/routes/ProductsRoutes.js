import express from 'express'

const router = express.Router();
import Products from '../models/Products.js';
import authMiddleware from '../Middleware/authMiddleware';

router.post('/addProducts', authMiddleware, async (req, res) => {
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

router.get("/search", async (req, res) => {
    try {
        const { searchTerm } = req.query;
        if (!searchTerm) {
            return res.status(400).json({ message: "Search term is required" });
        }

        // Case-insensitive search using regex
        const products = await Products.find({
            title: { $regex: searchTerm, $options: "i" }, // "i" makes it case-insensitive
        });

        res.status(200).json({ results: products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", error });
    }
});


export default router;