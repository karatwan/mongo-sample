const Sandwich = require('./model');

function generateData() {
    // make a sandwich
    const falafel = new Sandwich({
        name: "Falafel",
        ingredients: ["falafel", "lettuce", "tomato", "cucumber", "tahini"],
        price: 3.95
    })
    const blart = new Sandwich({
        name: "BLART", 
        ingredients: ["bacon", "lettuce", "avocado", "red onion", "tomato"], 
        price: 4.00
    });
    const reuben = new Sandwich({
        name: "Reuben", 
        ingredients: ["pastrami", "sauerkraut", "mustard", "provolone", "horseradish"],
        price: 7.50
    });
    
    // Save a sandwich to db
    blart.save();
    reuben.save();
    falafel.save();
}

module.exports = generateData;