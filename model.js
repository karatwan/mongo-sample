const mongoose = require('mongoose');

// create schema
const sandwichSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    price: Number
});

sandwichSchema.methods.speak = function speak() {
    console.log(`I'm a talking sandwich named ${this.name}`);
}

// create model
const Sandwich = mongoose.model('Sandwich', sandwichSchema);

module.exports = Sandwich;