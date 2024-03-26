import { Note } from "../models/noteModel.js";
import mongoose from "mongoose";

// Function to create a note
const createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Function to get all notes
const getNotes = async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });

  return res.status(200).json(notes);
};

// Function to get a single note
const getSingleNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Note not found" });

  const note = await Note.findById(id);

  if (!note) return res.status(404).json({ error: "Note not found" });

  return res.status(200).json(note);
};

// Function to update a note

const updateNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Note not found" });

  const note = await Note.findByIdAndUpdate({ _id: id }, { ...req.body });

  return res.status(200).json(note);
};

// Function to delete a note

const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Note not found" });

  const note = await Note.findByIdAndDelete(id);

  if (!note) return res.status(404).json({ error: "Note not found" });

  return res.status(200).json(note);
};

export { createNote, getNotes, getSingleNote, updateNote, deleteNote };
