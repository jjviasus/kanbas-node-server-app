import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
        _id: { type: String, required: true },
        endDate: Date,
        image: String,
        name: String,
        startDate: Date,
        number: { type: String, unique: true, required: true }
    },
    {collection: "courses"});
export default coursesSchema;