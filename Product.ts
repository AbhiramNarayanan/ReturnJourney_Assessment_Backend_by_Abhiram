//**README.md:**  Please refer to the README file for comprehensive documentation, detailed explanations of the code, 
//and instructions on testing each file with clear examples provided.

class Product {
    id: string;
    name: string;
    description: string;
    price: number;

    constructor(id: string, name: string, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

export default Product;
