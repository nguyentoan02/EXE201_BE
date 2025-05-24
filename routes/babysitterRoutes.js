import express from 'express';
import {
  getAllBabysitters,
  getBabysitter,
  createBabysitter,
  updateBabysitter,
  deleteBabysitter
} from '../controllers/babysitterController.js';

const router = express.Router();

// GET all babysitters
router.get('/', getAllBabysitters);

// GET single babysitter
router.get('/:id', getBabysitter);

// POST new babysitter
router.post('/', createBabysitter);

// PUT update babysitter
router.put('/:id', updateBabysitter);

// DELETE babysitter
router.delete('/:id', deleteBabysitter);

export default router; 