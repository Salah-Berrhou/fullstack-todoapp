const mongoose = require("mongoose")

const connectDb = () => {
    mongoose.connect('mongodb://localhost:27017/todoApp').then(() => {
        console.log("Connected to database")
    })
}

module.exports = connectDb;