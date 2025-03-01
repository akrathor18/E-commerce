import express from 'express'
import Products from '../models/Products.js';
import authMiddleware from '../Middleware/authMiddleware.js';
const router = express.Router();

router.post('/addProducts', authMiddleware, async (req, res) => {
    try {
        const product = req.body;

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

// In your backend (e.g., Express route)
router.get('/filter', async (req, res) => {
    try {
        const { category, rating } = req.query;

        let filterConditions = {};

        // If a category is specified, add it to filter
        if (category && category !== 'All') {
            filterConditions.category = category;
        }

        // If a rating is specified, add it to filter
        if (rating && rating !== 'All') {
            filterConditions.rating = { $gte: Number.parseInt(rating) };
        }

        // Find products with the given filters
        const filteredProducts = await Products.find(filterConditions);

        res.json(filteredProducts);
    } catch (error) {
        console.error('Error fetching filtered products:', error);
        res.status(500).send('Server Error');
    }
});


router.get('/categories', async (req, res) => {
    try {
        // Use MongoDB aggregation to get distinct categories
        const categories = await Products.distinct("category"); // 'category' is the field you want distinct values for

        res.json(categories); // Send the list of categories back as JSON
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).send('Server Error');
    }
});


export default router;