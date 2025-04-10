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
exports.deleteAlumno = exports.updateAlumno = exports.createAlumno = exports.getAllAlumnos = void 0;
const db_1 = require("../config/db");
const alumnos_1 = require("../entities/alumnos");
// Obtener todos los registros
const getAllAlumnos = () => __awaiter(void 0, void 0, void 0, function* () {
    const alumnosRepository = db_1.AppDataSource.getRepository(alumnos_1.alumnos);
    return yield alumnosRepository.find();
});
exports.getAllAlumnos = getAllAlumnos;
// Crear un nuevo registro
const createAlumno = (nombre, apellido) => __awaiter(void 0, void 0, void 0, function* () {
    const alumno = new alumnos_1.alumnos();
    alumno.nombres = nombre;
    alumno.apellidos = apellido;
    const alumnosRepository = db_1.AppDataSource.getRepository(alumnos_1.alumnos);
    return yield alumnosRepository.save(alumno);
});
exports.createAlumno = createAlumno;
// Actualizar un registro existente
const updateAlumno = (id, nombre, apellido) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnosRepository = db_1.AppDataSource.getRepository(alumnos_1.alumnos);
    const alumno = yield alumnosRepository.findOneBy({ id });
    if (!alumno) {
        throw new Error("Alumno no encontrado");
    }
    alumno.nombres = nombre;
    alumno.apellidos = apellido;
    return yield alumnosRepository.save(alumno);
});
exports.updateAlumno = updateAlumno;
// Eliminar un registro
const deleteAlumno = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnosRepository = db_1.AppDataSource.getRepository(alumnos_1.alumnos);
    const alumno = yield alumnosRepository.findOneBy({ id });
    if (!alumno) {
        throw new Error("Alumno no encontrado");
    }
    yield alumnosRepository.remove(alumno);
    return { message: "Alumno eliminado correctamente" };
});
exports.deleteAlumno = deleteAlumno;
