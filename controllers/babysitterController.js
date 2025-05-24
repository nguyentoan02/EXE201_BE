import Babysitter from '../model/Babysitter.js';

// Get all babysitters
export const getAllBabysitters = async (req, res) => {
  try {
    const babysitters = await Babysitter.find();
    res.status(200).json(babysitters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single babysitter
export const getBabysitter = async (req, res) => {
  try {
    const babysitter = await Babysitter.findById(req.params.id);
    if (!babysitter) {
      return res.status(404).json({ message: 'Babysitter not found' });
    }
    res.status(200).json(babysitter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new babysitter
export const createBabysitter = async (req, res) => {
  try {
    const babysitter = new Babysitter(req.body);
    const savedBabysitter = await babysitter.save();
    res.status(201).json(savedBabysitter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update babysitter
export const updateBabysitter = async (req, res) => {
  try {
    const babysitter = await Babysitter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!babysitter) {
      return res.status(404).json({ message: 'Babysitter not found' });
    }
    res.status(200).json(babysitter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete babysitter
export const deleteBabysitter = async (req, res) => {
  try {
    const babysitter = await Babysitter.findByIdAndDelete(req.params.id);
    if (!babysitter) {
      return res.status(404).json({ message: 'Babysitter not found' });
    }
    res.status(200).json({ message: 'Babysitter deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 