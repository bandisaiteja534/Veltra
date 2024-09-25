const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Optional field for trip image URL
        default: null,
    },
});

const Trip = mongoose.model('Trip', TripSchema);
module.exports = Trip;
