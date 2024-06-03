import mongoose from "mongoose";


const PersonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            minlength: [3, 'Name must be at least 3 characters'],
            maxlength: [50, 'Name must be less than 50 characters']
            
        },
        age: {
            type: Number,
            required: [true, 'Please provide an age'],
            min: [18, 'Age must be at least 18'],
            max: [100, 'Age must be less than 100']
        },
        work: {
            type: String,
            required: [true, 'Please provide a work'],
            minlength: [3, 'Work must be at least 3 characters'],
            maxlength: [50, 'Work must be less than 50 characters']
        },
        mobile: {
            type: String,
            required: [true, 'Please provide a mobile'],
            minlength: [10, 'Mobile must be at least 10 characters'],
            maxlength: [15, 'Mobile must be less than 15 characters']
        },
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            minlength: [6, 'Email must be at least 6 characters'],
            maxlength: [50, 'Email must be less than 50 characters']
        },
        address: {
            type: String,
            required: [true, 'Please provide an address'],
            minlength: [3, 'Address must be at least 3 characters'],
            maxlength: [50, 'Address must be less than 50 characters']
        },
        salary: {
            type: Number,
            required: [true, 'Please provide a salary'],
            min: [1000, 'Salary must be at least 1000'],
            max: [100000, 'Salary must be less than 100000']
        }
    },

    {
        timestamps: true
    }
)

export const Person = mongoose.model("Person", PersonSchema);