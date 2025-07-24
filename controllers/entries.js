import { Entry } from "../model/entry.js";

export const getEntries = async (req, res) => {
    console.log("view Entries");

    try {
        
        const allEntries = await Entry.find({});
        res.status(200).json({ allEntries });

    } catch (error) {   
        res.status(500).json({ msg: error });
    }

}

export const createEntry = async (req, res) => {
    console.log("Entry added");

    try {

        const newEntry = await Entry.create(req.body);
        res.status(201).json({ newEntry });
        
    } catch (error) {
        res.status(500).json({ msg: error });
    }
    
}

export const editEntry = async (req, res) => {
    console.log("Edit sucessful");
    
    try {
        
        console.log(req.body);
        const id = req.params.id;
        const updatedEntry = await Entry.findByIdAndUpdate( id, req.body, {
            new: true,  // returns the updated document
            runValidators: true  // re-run the mongoose schema validation
        });

        if (!updatedEntry) {
            return console.log(`Entry not found`);
        }

        res.status(200).json({ updatedEntry });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: error });
    }

}

export const deleteEntry = async (req, res) => {
    console.log("Entry deleted");

    try {

        const id = req.params.id;
        const deletedEntry = await Entry.deleteOne({ _id: id});

        if (!deleteEntry) {
            return res.status(404).json({ msg: `Entry with id: ${id} does not exist`});
        }

        res.status(202).json({ deletedEntry });
        
    } catch (error) {
        res.status(500).json({ msg: error });
    }

}