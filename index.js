const mongoose = require('mongoose');
const Sandwich = require('./model');
const generateData = require('./generate-data');
const queries = require('./queries');
const {user, password} =require('./consts');

main().catch(err => console.log(err));

async function main() {
    

    const uri = `mongodb+srv://${user}:${password}@sandbox.lbrfhge.mongodb.net/`;
    await mongoose.connect(uri); //('mongodb://localhost:27017/sandbox');

    // Make some sandwiches
    generateData();

    // Get all sandwiches
    const all = await queries.getAllSandwiches({});
    console.log("All sandwiches:", all);

    // Get a filtered list of sandwiches
    const tomatoSandwiches = await queries.getAllSandwiches({ingredients: {$in: ['tomato']}});
    console.log("Tomato sandwiches:", tomatoSandwiches);

    const cheapSandwiches = await queries.getAllSandwiches({price: {$lt: 5}});
    console.log("Cheap sandwiches:", cheapSandwiches);


    // Get a sandwich
    const reuben = await queries.getOneSandwich({name: "Reuben"});

    // and call a function to a sandwich
    reuben.speak();

    // change its name
    reuben.name = "Jonathan";
    reuben.save();
}