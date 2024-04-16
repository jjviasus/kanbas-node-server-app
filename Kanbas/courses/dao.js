import model from "./model.js";

export const createCourse = (courseData) => {return model.create(courseData);}
export const findAllCourses = () => {return model.find();}
export const findCourseById = (courseId) => {return model.findById(courseId);}
export const updateCourse = (courseId, courseData) => {return model.updateOne({_id: courseId}, { $set: courseData});}
export const deleteCourse = (courseId) => {return model.deleteOne({_id: courseId});}

