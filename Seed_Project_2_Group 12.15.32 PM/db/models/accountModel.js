const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    name: String,
    password: String,
    email: String,
    address: {
        city: String,
        street: String,
        zipCode: Number,
        state: String
    },
    cart:[],
    ccNumber: Number,
    admin: Boolean
});

const accounts = mongoose.model(`accountDatabase`, accountSchema)

module.exports = accounts