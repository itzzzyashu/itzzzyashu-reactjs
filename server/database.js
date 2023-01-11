const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true},
    () => { console.log("Connected to MongoDB !") })
}

module.exports = connectToMongo;