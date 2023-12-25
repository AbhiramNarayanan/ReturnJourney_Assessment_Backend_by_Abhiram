//**README.md:**  Please refer to the README file for comprehensive documentation, detailed explanations of the code, 
//and instructions on testing each file with clear examples provided.

//Run this Application using: npx ts-node-dev app.ts
//Use a tool like Postman to test the API endpoints

//Task 4: RESTful API Development
import express, { Request, Response,NextFunction} from 'express';
import Product from './Product';

const app = express();
app.use(express.json());


//Task 5: Middleware Implementation
// Middleware function to log request details
function logRequest(req: Request, res: Response, next: NextFunction) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    console.log(`[${timestamp}] ${method} ${url}`);
    next(); // Move to the next middleware or route handler
}

app.use(logRequest); // Register the middleware globally

// In-memory product data store (an array)
let products: any[] = [];


// Default route for /
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Product API!'); 
});

// GET /api/products
app.get('/api/products', (req: Request, res: Response) => {
    res.json(products);
});

// GET /api/products/:id
app.get('/api/products/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const product = products.find((p: any) => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

// POST /api/products
app.post('/api/products', (req: Request, res: Response) => {
    const { id, name, description, price } = req.body;

    // Check for missing required fields
    if (!id || !name || !description || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // If all required fields are present, create a new product
    const newProduct = new Product(id, name, description, price);
    products.push(newProduct);
    return res.status(201).json(newProduct);
});


// PUT /api/products/:id
app.put('/api/products/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedProductData = req.body;
    const index = products.findIndex((p: Product) => p.id === id);
    if (index !== -1) {
        const updatedProduct = Object.assign(products[index], updatedProductData);
        res.json(updatedProduct);
    } else {
        res.status(404).send('Product not found');
    }
});

// DELETE /api/products/:id
app.delete('/api/products/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    products = products.filter((p: any) => p.id !== id);
    res.send('Product deleted successfully');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


export default app;