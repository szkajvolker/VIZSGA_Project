import Scooter from "../models/scooter.model.js";

export const createNewScooter = async (req, res) => {
  try {
    const scooter = req.body;
    const newScooter = await Scooter.create(scooter);
    if (!newScooter) {
      console.log("Failed to create new scooter");
    }
    return res.status(201).json({ message: "Succesfully created", newScooter });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllScooters = async (req, res) => {
  try {
    const scooters = await Scooter.find({});
    if (scooters.length === 0) {
      return res.status(404).json({ message: "No scooters yet" });
    }
    return res.status(200).json({ message: "all scooters succesfully fetched", scooters });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateScooterByID = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedScooter = await Scooter.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedScooter) {
      return res.status(404).json({ message: "Scooter not found" });
    }
    return res.status(200).json({ message: "Scooter updated sucsesfully", updatedScooter });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteScooterByID = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedScooter = await Scooter.findByIdAndDelete(id);
    if (!deletedScooter) {
      return res.status(404).json({ message: "Scooter not found" });
    }
    return res.status(200).json({ message: "Scooter succesfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getScooterById = async (req, res) => {
  try {
    const { id } = req.params;
    const scooter = await Scooter.findById(id);
    if (!scooter) {
      return res.status(404).json({ message: "not found scooter" });
    }
    res.status(200).json({ message: "scooter found", scooter });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
