"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.getUsersController); // Obtener usuarios
router.post("/", user_controller_1.createUserController); // Crear usuario
router.put("/:id", user_controller_1.updateUserController); // Actualizar usuario
router.delete("/:id", user_controller_1.deleteUserController); // Eliminar usuario
exports.default = router;
