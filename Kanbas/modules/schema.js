import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modules: {
        type: String,
        ref: 'Module'
    }
});

const moduleSchema = new mongoose.Schema({
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        course: {
            type: String,
            required: true
        },
        lessons: [lessonSchema] // Embedding lessons as a sub-document array
    },
    {collection: "modules"});

export default moduleSchema;