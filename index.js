const {intializeDatabase} = require("./db/db.connect");

intializeDatabase();

const fs = require("fs");
const Car = require("./models/cars.models");

const jsonData = fs.readFileSync('cars.json','utf-8');
const carsData = JSON.parse(jsonData);

const seedData = () =>{
    try{
        for(const carData of carsData ){
            // whenever we have to create movie data we hsve to instantiate a new instance of Movie model that we have
            const newCar = new Car({
                brand: carData.brand,
                model: carData.model,
                year: carData.year,
                bodyStyle: carData.bodyStyle,
                fuelType: carData.fuelType,
                transmission: carData.transmission,
                engine: carData.engine,
                mileage: carData.mileage,
                color: carData.color,
                price: carData.price,
                condition: carData.condition,
                description: carData.description,
                photos: carData.photos,
                inMarket: carData.inMarket
            });

            console.log(newCar.brand)
            // to save this data to databse use .save fn of mongoose
            newCar.save()
        }
    } catch(error){
        console.log("Error seeding the data",error)
    }
}

seedData();