import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            minlength: [3, 'Name must be at least 3 characters'],
            maxlength: [50, 'Name must be less than 50 characters']

        },
        price: {
            type: Number,
            required: [true, 'Please provide a price'],
            min: [1, 'Price must be at least 1'],
            max: [100000, 'Price must be less than 100000']
        },
        taste: {
            type: String,
            required: [true, 'Please provide a taste'],
            minlength: [3, 'Taste must be at least 3 characters'],
            maxlength: [50, 'Taste must be less than 50 characters']
        },
        is_drink: {
            type: Boolean,
            required: [true, 'Please provide a boolean value'],
        },
        ingredients: {
            type: [String],
            required: [true, 'Please provide an array of ingredients'],
            minlength: [3, 'Ingredients must be at least 3 characters'],
            maxlength: [50, 'Ingredients must be less than 50 characters']
        },
        num_sales: {
            type: Number,
            required: [true, 'Please provide a number of sales'],
            min: [0, 'Number of sales must be at least 0'],
            max: [100000, 'Number of sales must be less than 100000']
        }
    },
    {
        timestamps: true
    }

)

export const Menu = mongoose.model('Menu', MenuSchema);