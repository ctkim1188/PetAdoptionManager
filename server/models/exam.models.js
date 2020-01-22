const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be filled"],
        minlength: [3, "name must be at least 3 characters long"],
        unique: [true, "this name already exists"]
    },
    type: {
        type: String,
        required: [true, "type must be filled"],
        minlength: [3, "type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "description must be filled"],
        minlength: [5, "your description must be at least 5 chracters long"]
    },
    likes: {
        type: Number,
        default: 0,
    },
    skillOne:{
        type: String,
        required: [false],
        default: ""
    },
    skillTwo:{
        type: String,
        required: [false],
        default: ""
    },
    skillThree:{
        type: String,
        required: [false],
        default: ""
    }
});

PetSchema.plugin(uniqueValidator, {message: 'That name already exists. Please rename the Pet'})

const Pets = mongoose.model('Pets', PetSchema);
module.exports = Pets