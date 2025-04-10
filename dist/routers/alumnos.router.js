"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnos_controller_1 = require("../controllers/alumnos.controller");
const alumnosRouter = (0, express_1.Router)();
// Rutas para alumnos
alumnosRouter.get("/", alumnos_controller_1.getAlumnosController);
alumnosRouter.post("/", alumnos_controller_1.createAlumnoController);
alumnosRouter.put("/:id", alumnos_controller_1.updateAlumnoController);
alumnosRouter.delete("/:id", alumnos_controller_1.deleteAlumnoController);
exports.default = alumnosRouter;
