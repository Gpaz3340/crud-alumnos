"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlumnoController = exports.updateAlumnoController = exports.createAlumnoController = exports.getAlumnosController = void 0;
const alumnos_services_1 = require("../services/alumnos.services");
// Obtener todos los alumnos
const getAlumnosController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alumnos = yield (0, alumnos_services_1.getAllAlumnos)();
        res.status(200).json(alumnos);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAlumnosController = getAlumnosController;
// Crear un nuevo alumno
const createAlumnoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido } = req.body;
        const nuevoAlumno = yield (0, alumnos_services_1.createAlumno)(nombre, apellido);
        res.status(201).json(nuevoAlumno);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createAlumnoController = createAlumnoController;
// Actualizar un alumno existente
const updateAlumnoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, apellido } = req.body;
        const alumnoActualizado = yield (0, alumnos_services_1.updateAlumno)(Number(id), nombre, apellido);
        res.status(200).json(alumnoActualizado);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateAlumnoController = updateAlumnoController;
// Eliminar un alumno
const deleteAlumnoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const resultado = yield (0, alumnos_services_1.deleteAlumno)(Number(id));
        res.status(200).json(resultado);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteAlumnoController = deleteAlumnoController;
