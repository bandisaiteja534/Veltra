const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');
const Trip = require('../models/Trip');

router.get('/', async (req, res) => {
    try {
      const Trip = await Trip.find();
      res.render('Trip', { Trip });
    } catch (error) {
      console.error('Error retrieving Trip:', error);
      res.status(500).send('Error retrieving Trip');
    }
  });
// Get the form to add a new Trip
router.get('/add', (req, res) => {
    res.render('addTrip'); // Render the form to add a Trip
});

// Post a new Trip
router.post('/', async (req, res) => {
    const { title, company, location, description, image } = req.body;

    try {
        const Trip = new Trip({
            title,
            company,
            location,
            description,
            image: image || '/images/default.png' // Use placeholder if no image is provided
        });
        await Trip.save();
        res.redirect('/Trip'); // Redirect to the Trip listing page after adding a Trip
    } catch (error) {
        res.status(500).send('Error adding Trip');
    }
});

// Delete a Trip
router.post('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Trip.findByIdAndDelete(id);
        res.redirect('/Trip'); // Redirect to the Trip listing page after deletion
    } catch (error) {
        res.status(500).send('Error deleting Trip');
    }
});

module.exports = router;
