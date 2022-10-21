const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    price: Number,
    description:String,
    category:String,
    img: String
});

const item = mongoose.model(`itemDatabase`, itemSchema)

module.exports = item