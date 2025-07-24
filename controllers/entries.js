import { Entry } from "../model/entry.js";

export const getEntries = (req, res) => {
    console.log("view Entries");
    res.send("View Journal");
}

export const createEntry = async (req, res) => {
    console.log("Entry added");
    console.log(req.body);
    
    const entry = await Entry.create(req.body);
    console.log(entry);
    res.status(201).json({ entry });
}

export const editEntry = (req, res) => {
    console.log("Edit sucessful");
    console.log(req.body)
    const edit = req.params.id;
    res.json({ id: edit });
}

export const deleteEntry = (req, res) => {
    console.log("Entry deleted");
    res.send("Entry Deleted");
}