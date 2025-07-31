const mongoose = require('mongoose');

// The .config() method reads the .env file and parses its contents into key-value pairs, which are then added to process.env.

// The dotenv package (require('dotenv').config()) reads a .env file in the root of your project.
require('dotenv').config();




// this is the connection string
// The MONGODB variable typically contains the URI needed to connect to a MongoDB database.

const mongoUri = process.env.MONGODB;

const intializeDatabase = async () => {
  await mongoose.connect(mongoUri).then(() => {
    console.log('Connected to Database');
  }     ).catch((error) => {
    console.log('Error connecting to database', error);
  });
}   


module.exports = {intializeDatabase};
