const mongoose = require("mongoose");

// create a Product schema
// the schema is the format to save your data on the database
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        category: {
            type: Array,
        },
        size: {
            type: String,
        },
        price: {
            type: Number,
            defualt: 50,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
