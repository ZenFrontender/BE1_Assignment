const mongoose = require('mongoose');


const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    bodyStyle: String,
    fuelType: String,
    transmission: String,
    engine: String,
    mileage: Number,
    color: String,
    price: Number,
    condition: String,
    description: String,
    photos: [{
        type: String
    }],
    inMarket: Boolean
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;