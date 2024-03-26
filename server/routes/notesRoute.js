const express = require("express");
import { Note } from "../models/noteModel.js";
import {
  createNote,
  getNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const router = express.Router();

// Route to create a new note
router.post("/", createNote);

// Route to get all notes
router.get("/", getNotes);

// Route to get a single note
router.get("/:id", getSingleNote);

// Route to update a note
router.patch("/:id", updateNote);

// Route to delete a note
router.delete("/:id", deleteNote);
