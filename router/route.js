import express from "express"
import { createEntry, deleteEntry, editEntry, getEntries } from "../controllers/entries.js";

export const router = express.Router();

router.route("/").get(getEntries).post(createEntry);
router.route("/:id").patch(editEntry).delete(deleteEntry);

// could maybe add another get route for get journal entry by date 

