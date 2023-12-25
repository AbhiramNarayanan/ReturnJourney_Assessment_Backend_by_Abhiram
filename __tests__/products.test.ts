//**README.md:**  Please refer to the README file for comprehensive documentation, detailed explanations of the code, 
//and instructions on testing each file with clear examples provided.

//Execute tests using `npx jest`

//Task 6: Unit Testing
import request from 'supertest';
import app from '../app'; //app setup is in app.ts
import http from 'http'; // Import the 'http' module

let server: http.Server; // Define the type explicitly as 'http.Server'

beforeAll(() => {
  server = app.listen(4000) as http.Server; // Cast 'app.listen()' to 'http.Server'
});

afterAll((done) => {
  server.close(done);
});

describe('GET /api/products', () => {
    it('should get a list of products with status 200', async () => {
        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should return an empty array when no products are available', async () => {
        // Assuming products array is empty
        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });
});




describe('POST /api/products', () => {
    it('should create a new product with status 201', async () => {
        const newProduct = {
            id: '123',
            name: 'Test Product',
            description: 'Test Description',
            price: 50
        };

        const response = await request(app)
            .post('/api/products')
            .send(newProduct);

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(newProduct);
    });

    it('should handle missing required fields and return status 400', async () => {
        const newProductWithoutName = {
            id: '234',
            description: 'Test Description',
            price: 60
        };

        const response = await request(app)
            .post('/api/products')
            .send(newProductWithoutName);

        expect(response.status).toBe(400);
    });
});
