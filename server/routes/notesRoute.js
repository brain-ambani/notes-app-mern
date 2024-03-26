const express = require("express");

const {
  createNote,
  getNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

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

module.exports = router;
