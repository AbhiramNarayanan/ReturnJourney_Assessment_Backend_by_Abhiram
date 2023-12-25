
# Getting Started

Clone the repository:
git clone <repository_URL>


Install dependencies: npm install


**JavaScript Assignment Documentation**

This repository contains a JavaScript assignment consisting of three tasks. Each task has been individually completed and placed in the Javascriptassessment.js file.

**Tasks Overview**

__Task 1: Array Manipulation__
The first task involved manipulating arrays to extract unique elements without using built-in functions like Set.
The provided JavaScript code accomplishes this task:

// JavaScript function to extract unique elements from an array
function getUniqueElements(arr) {
    // Initialize an empty array to store unique elements
    const uniqueArray = [];

    // Loop through the input array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is not already present in the 'uniqueArray'
        if (uniqueArray.indexOf(arr[i]) === -1) {
            // If not present, add the element to the 'uniqueArray'
            uniqueArray.push(arr[i]);
        }
    }

    // Return the array containing unique elements
    return uniqueArray;
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 5];
// Get the unique elements from 'inputArray' using the 'getUniqueElements' function
const uniqueElements = getUniqueElements(inputArray);
// Display the resulting array containing unique elements
console.log(uniqueElements); // Output: [1, 2, 3, 4, 5]



__Task 2: Object Operations__
The second task required performing operations on JavaScript objects. Specifically, it aimed at merging properties from two given car objects into a new object.

// Define car objects
const car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

const car2 = {
    brand: "Honda",
    model: "Civic",
    color: "Red"
};

// Function to merge car objects
function mergeCarObjects(carA, carB) {
    // Merge 'carA' and 'carB' objects into a new object using object spread syntax
    const mergedCar = { ...carA, ...carB };
    return mergedCar;
}

// Example usage:
// Merge 'car1' and 'car2' objects using the 'mergeCarObjects' function
const mergedCarObject = mergeCarObjects(car1, car2);
// Display the resulting merged car object
console.log(mergedCarObject);
// Output: { brand: "Honda", model: "Civic", year: 2020, color: "Red" }



__Task 3: Logical Operations__
The third task involved logical operations on arrays to find common elements between two arrays without using built-in functions.

// Function to find common elements between two arrays
function findCommonElements(arr1, arr2) {
    // Initialize an empty array to store common elements
    const commonElements = [];
    
    // Loop through the first array
    for (let i = 0; i < arr1.length; i++) {
        // Loop through the second array for each element of the first array
        for (let j = 0; j < arr2.length; j++) {
            // Check if the current elements from both arrays are equal
            if (arr1[i] === arr2[j]) {
                // If equal, push the common element to the 'commonElements' array
                commonElements.push(arr1[i]);
                // Break the loop as the element is found and added to the 'commonElements' array
                break;
            }
        }
    }
    
    // Return the array containing common elements
    return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// Find common elements between array1 and array2
const commonElementsArray = findCommonElements(array1, array2);
// Display the resulting array containing common elements
console.log(commonElementsArray); // Output: [3, 4, 5]


**Running the Tasks**
To run the completed tasks:

1. Open your terminal or command prompt.

2. Navigate to the directory containing the Javascriptassessment.js file.

3. Run Node.js along with the file name to execute the tasks:  **node Javascriptassessment.js**

This will execute the tasks and display the respective results after performing the required operations on arrays or objects, as specified in each task.






**Node.js and TypeScript Assignment Documentation**

__Task 4: RESTful API Development__
In this task, a RESTful API has been designed and implemented using Node.js and TypeScript. The API consists of the following endpoints:

- GET /api/products: Retrieves a list of products.
- GET /api/products/:id: Retrieves details of a specific product by ID.
- POST/api/products: Creates a new product.
- PUT/api/products/:id: Updates details of a specific product by ID.
- DELETE/api/products/:id: Deletes a product by ID.

**Implementation Details:**

1. Dependencies Installed:

- `express`: Used to create the server and define routes.
- `ts-node-dev`: Used for running TypeScript files.
Code Explanation:

- `app.ts` file:

- Imported necessary modules: `express`, `Product`.
- Created an instance of the Express application.
- Implemented RESTful endpoints to handle various CRUD operations on products.
- Utilized an in-memory data store represented by an array for storing product information.
- Configured server to listen on port 3000.

-`product.ts` file:

  - Defined a TypeScript class `Product` to represent product information.

__Task 5: Middleware Implementation__

For this task, a middleware function has been created to log details of incoming requests to the API, such as the timestamp, HTTP method, and requested URL. This middleware is registered globally in the application.

**Code Explanation:**

The `logRequest` middleware function:

- Captures the timestamp, HTTP method, and requested URL for incoming requests.
- Logs this information to the console.
- Invokes the `next()` function to proceed to the next middleware or route handler.

**Running the Application:**

To run the application locally:

1. Clone the Repository: git clone <repository_url>
2. Install Dependencies: npm install
(We have done these 2 steps earlier)
3. Run the Application: **npx ts-node-dev app.ts**


**Testing the API Endpoints:**
Use a tool like Postman to test the API endpoints:

- GET /api/products: Retrieve a list of products.
- POST /api/products: Create a new product.
- PUT /api/products/:id: Update details of a specific product by ID.
- DELETE /api/products/:id: Delete a product by ID.

**Example Usage (Postman):**
"Postman is used solely for testing the functionality of the API endpoints as there is no frontend created for integration purposes."

**For Post Request**
1. Request:

- Method: POST
- URL: `http://localhost:3000/api/products`
- Body (raw, JSON): {
   "id": "1",
   "name": "Product Name",
   "description": "Product Description",
   "price": 99.99
}

2. Expected Response:

Status: 201 Created
Body: {
   "id": "1",
   "name": "Product Name",
   "description": "Product Description",
   "price": 99.99
}

Likewise test for
**For GET request:**
Request:

Method: GET
URL: http://localhost:3000/api/products/1

**For PUT request:**
Request:

Method: PUT
URL: http://localhost:3000/api/products/1
Body (raw, JSON): 
{
    "name": "Updated Product Name",
    "description": "Updated Product Description",
    "price": 29.99
}

**For DELETE request:**
Request:

Method: DELETE
URL: http://localhost:3000/api/products/1


Additionally, the middleware function logs request details in the terminal for each incoming request. (for eg: [2023-12-25T08:10:16.903Z] POST /api/products )



**Unit Testing Documentation**

__Task 6: Unit Testing.__
For this task, the following steps were taken:

1. Test Suite Setup: Utilized the Jest testing framework for creating unit tests for API endpoints.

2. Test File Structure: Created a file named **products.test.ts** for writing tests.

3. Installation: Installed and imported necessary packages such as supertest and http for handling HTTP requests and server setup.

4. Server Configuration: Initialized the server in the test file by importing the app setup from app.ts and defining the server as an http.Server instance.

5. Test Descriptions: Implemented tests for the API endpoints /api/products for GET and POST requests.

6. Test Implementation:

- GET /api/products Endpoint:

 - Checked if the endpoint returns a list of products with status 200.
 - Tested for an empty array response when no products are available.

- POST /api/products Endpoint:

 - Verified if the endpoint creates a new product with status 201.
 - Checked if the endpoint handles missing required fields and returns status 400.

7. Babel Configuration: Created a **.babelrc** file to set up presets like @babel/preset-env and @babel/preset-typescript for transpiling TypeScript code during testing.

8. **Running Tests: Executed tests using `npx jest` .**

9. Test Results Interpretation:

Example:  npx jest
  console.log
    Server running on port 3000

      at Server.log (app.ts:84:13)

  console.log
    [2023-12-25T08:57:44.353Z] GET /api/products

      at log (app.ts:14:13)

  console.log
    [2023-12-25T08:57:44.394Z] GET /api/products

      at log (app.ts:14:13)

  console.log
    [2023-12-25T08:57:44.454Z] POST /api/products

      at log (app.ts:14:13)

  console.log
    [2023-12-25T08:57:44.475Z] POST /api/products

      at log (app.ts:14:13)

 PASS  __tests__/products.test.ts
  GET /api/products
    √ should get a list of products with status 200 (68 ms)                                                                                                                                              
    √ should return an empty array when no products are available (21 ms)                                                                                                                                
  POST /api/products                                                                                                                                                                                     
    √ should create a new product with status 201 (63 ms)                                                                                                                                                
    √ should handle missing required fields and return status 400 (11 ms)                                                                                                                                
    √ should create a new product with status 201 (63 ms)
0 (11 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.05 s
Ran all test suites.

 - The displayed logs indicated that the server was running on port 3000.
 - The logs also showed details of HTTP requests made to /api/products (GET and POST) with timestamps.
 - The summary displayed that all test suites passed successfully (1 passed, 1 total).
 - Four tests were executed in total (4 passed, 4 total), covering different scenarios for GET and POST endpoints.

10. Conclusion: The successful execution of tests validates that the defined API endpoints perform accurately as per the specified test cases. This ensures the reliability and correctness of the API functionalities, assuring users of their expected behavior.


