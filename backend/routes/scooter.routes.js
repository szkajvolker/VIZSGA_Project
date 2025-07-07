import express from "express";
import {
  createNewScooter,
  deleteScooterByID,
  getAllScooters,
  getScooterById,
  updateScooterByID,
} from "../controllers/scooter.controller.js";

const router = express.Router();

router.post("/create", createNewScooter);
router.get("/all", getAllScooters);
router.put("/:id", updateScooterByID);
router.delete("/:id", deleteScooterByID);
router.get("/:id", getScooterById);

export default router;
