const Sandwich = require('./model');

const queries = {
    getAllSandwiches: async function (filter) {
        const sandwiches = await Sandwich.find(filter);
        return sandwiches;
    },
    getOneSandwich: async function (filter) {
        const sandwich = await Sandwich.findOne(filter);
        return sandwich;
    }

}


module.exports = queries;