import * as dao from './dao.js';  // Ensure this path correctly points to your DAO file

export default function CourseRoutes(app) {
    const getAllCourses = async (req, res) => {
        try {
            const courses = await dao.findAllCourses();
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    const getCourseById = async (req, res) => {
        try {
            const course = await dao.findCourseById(req.params.id);
            if (!course) {
                res.status(404).json({ message: "Course not found" });
                return;
            }
            res.json(course);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    const createCourse = async (req, res) => {
        try {
            const newCourse = await dao.createCourse(req.body);
            res.status(201).json(newCourse);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    const updateCourse = async (req, res) => {
        try {
            const updatedResult = await dao.updateCourse(req.params.id, req.body);
            if (updatedResult.matchedCount === 0) {
                res.status(404).json({ message: "No course found with that ID" });
                return;
            }
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    const deleteCourse = async (req, res) => {
        try {
            const deleteResult = await dao.deleteCourse(req.params.id);
            if (deleteResult.deletedCount === 0) {
                res.status(404).json({ message: "No course found with that ID" });
                return;
            }
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    app.get("/api/courses", getAllCourses); // works
    app.get("/api/courses/:id", getCourseById); // works
    app.post("/api/courses", createCourse); // works (duplicate course names and numbers are not allowed)
    app.put("/api/courses/:id", updateCourse); // works (updating the course number doesn't work)
    app.delete("/api/courses/:id", deleteCourse); // works
}