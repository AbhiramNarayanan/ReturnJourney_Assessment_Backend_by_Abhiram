//**README.md:**  Please refer to the README file for comprehensive documentation, detailed explanations of the code, 
//and instructions on testing each file with clear examples provided.

//Run this file to execute the tasks, for that use:  node Javascriptassessment.js

//Task 1: Array Manipulation
function getUniqueElements(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueElements = getUniqueElements(inputArray);
console.log(uniqueElements); // Output: [1, 2, 3, 4, 5]




//Task 2: Object Operations
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
    const mergedCar = { ...carA, ...carB };
    return mergedCar;
}

// Example usage:
const mergedCarObject = mergeCarObjects(car1, car2);
console.log(mergedCarObject);
// Output: { brand: "Honda", model: "Civic", year: 2020, color: "Red" }





//Task 3: Logical Operations

function findCommonElements(arr1, arr2) {
    const commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonElements.push(arr1[i]);
                break;
            }
        }
    }
    return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElementsArray = findCommonElements(array1, array2);
console.log(commonElementsArray); // Output: [3, 4, 5]
