const mongoose = require("mongoose");

// create a Cart schema
// the schema is the format to save your data on the database
const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
