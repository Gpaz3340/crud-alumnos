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
exports.deleteUserController = exports.updateUserController = exports.createUserController = exports.getUsersController = void 0;
const user_service_1 = require("../services/user.service");
// Obtener todos los usuarios
const getUsersController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.getAllUsers)();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getUsersController = getUsersController;
// Crear un nuevo usuario
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, apellido } = req.body;
        const newUser = yield (0, user_service_1.createUser)(name, apellido);
        res.json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createUserController = createUserController;
// Actualizar un usuario
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, apellido } = req.body;
        const updatedUser = yield (0, user_service_1.updateUser)(Number(id), name, apellido);
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateUserController = updateUserController;
// Eliminar un usuario
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, user_service_1.deleteUser)(Number(id));
        res.json({ message: "Usuario eliminado correctamente" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteUserController = deleteUserController;
