// routes/doctor.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
router.get('/:patientId', async (req, res) => {
    try {
      const patient = await Patient.findOne({ patientId: req.params.patientId });
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
      res.status(200).json(patient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });