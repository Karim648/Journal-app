import mongoose from "mongoose";

// create scheme for how you want entries to be added

const entrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must provide title"],
        maxlength: [20, "Title can not be more than 20 characters"],
        trim: true
    },
    date: {
        type: Date,
        required: [true, "Must provide date"],
    },
    entry: {
        type: String,
        required: [true, "Must provide entry"],
        trim: true
    }
});

export const Entry = mongoose.model("Entry", entrySchema);