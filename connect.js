const mongoose = require("mongoose")

const connectionString = "mongodb+srv://dev-user:FqerYzUp1152@cluster0.m3mfc.mongodb.net/"

module.exports.connectMongoDB = function() {
    mongoose
        .connect(connectionString,{})
        .then(() => {
            console.log("Connected to MongoDB")
        })
        .catch((err) => {
            console.log(err)
        })
}