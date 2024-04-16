import * as dao from "./dao.js";

function ModuleRoutes(app) {
    const updateModule = async (req, res) => {
        try {
            const {mid} = req.params;
            const updatedResult = await dao.updateModule(mid, req.body);
            if (updatedResult.matchedCount === 0) {
                res.status(404).json({message: "No module found with that ID"});
                return;
            }
            res.status(204).end();
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    const deleteModule = async (req, res) => {
        try {
            const {mid} = req.params;
            const deleteResult = await dao.deleteModule(mid);
            if (deleteResult.deletedCount === 0) {
                res.status(404).json({message: "No module found with that ID"});
                return;
            }
            res.status(204).end();
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    const findModulesByCourseId = async (req, res) => {
        try {
            const {cid} = req.params;
            const modules = await dao.findModulesByCourseId(cid);
            res.json(modules);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    const createModule = async (req, res) => {
        try {
            const {cid} = req.params;
            const newModule = await dao.createModule({...req.body, course: cid, _id: new Date().getTime().toString()});
            res.status(201).json(newModule);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    app.get("/api/courses/:cid/modules", findModulesByCourseId);
    app.post("/api/courses/:cid/modules", createModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.put("/api/modules/:mid", updateModule);
}

export default ModuleRoutes;