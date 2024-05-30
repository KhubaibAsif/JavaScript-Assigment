//1-Calculate total price of each item and all items form the given array


var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

var totalPriceAllItems = 0;

itemsArray.forEach(function (item) {
    var totalPrice = item.price * item.quantity;
    console.log("Total price of " + item.name + " is: " + totalPrice);
    totalPriceAllItems += totalPrice;
});

console.log("Total price of all items is: " + totalPriceAllItems);

//2-Creating the object with the specified properties
var person = {
    name: "Khubaib Asif",
    email: "Khubaib.Asif@example.com",
    password: "securepassword",
    age: 20,
    gender: "male",
    city: "Karachi",
    country: "Pakistan"
};

console.log('Person Details We Have==>', person);

// Checking if properties exist in the object
function checkProperty(obj, property) {
    return property in obj;
}

// Properties to check in the object
var propertiesToCheck = ["age", "country", "firstName", "lastName"];

// Checking each property and logging the result
propertiesToCheck.forEach(function (property) {
    if (checkProperty(person, property)) {
        console.log(property + " exists in the object.");
    } else {
        console.log(property + " does not exist in the object.");
    }
});


//3-Create a constructor function with some properties. Now
// create multiple records using the constructor.
// Constructor function
function Student(name, email, password, age, gender, city, country) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
}

// Creating multiple records using the constructor
var Student1 = new Student("Khizer", "Khizer.007@example.com", "0321231", 18, "male", "karachi", "Pakistan");
var Student2 = new Student("Shahrukh", "shahrukhh@example.com", "12345", 23, "male", "Lahore", "Pakistan");
var Student3 = new Student("Ariyan", "Ariyan.32@example.com", "0000", 20, "male", "Islamabad", "Pakistan");

console.log("Student1 Details==>", Student1);
console.log("Student2 Details==>", Student2);
console.log("Student3 Details==>", Student3);



