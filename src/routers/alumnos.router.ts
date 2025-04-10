import { Router, Request, Response } from "express";
import {
    getAlumnosController,
    createAlumnoController,
    updateAlumnoController,
    deleteAlumnoController,
} from "../controllers/alumnos.controller";

const alumnosRouter = Router();

// Rutas para alumnos
alumnosRouter.get("/", (req: Request, res: Response) => {
    getAlumnosController(req, res);
});

alumnosRouter.post("/", (req: Request, res: Response) => {
    createAlumnoController(req, res);
});

alumnosRouter.put("/:id", (req: Request, res: Response) => {
    updateAlumnoController(req, res);
});

alumnosRouter.delete("/:id", (req: Request, res: Response) => {
    deleteAlumnoController(req, res);
});

export default alumnosRouter;