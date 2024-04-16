import model from "./model.js";

export const findModulesByCourseId = (courseId) => {
    return model.find({ course: courseId });
};

export const createModule = (moduleData) => {
    return model.create(moduleData);
};

export const findModuleById = (moduleId) => {
    return model.findById(moduleId);
};

export const updateModule = (moduleId, moduleData) => {
    return model.updateOne({ _id: moduleId }, { $set: moduleData });
};

export const deleteModule = (moduleId) => {
    return model.deleteOne({ _id: moduleId });
};