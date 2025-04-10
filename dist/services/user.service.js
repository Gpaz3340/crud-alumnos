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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUsers = void 0;
const db_1 = require("../config/db");
const user_1 = require("../entities/user");
// Obtener todos los usuarios
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.AppDataSource.getRepository(user_1.User).find();
});
exports.getAllUsers = getAllUsers;
// Crear un nuevo usuario
const createUser = (name, apellido) => __awaiter(void 0, void 0, void 0, function* () {
    const user = db_1.AppDataSource.getRepository(user_1.User).create({ name, apellido });
    return yield db_1.AppDataSource.getRepository(user_1.User).save(user);
});
exports.createUser = createUser;
// Actualizar un usuario existente
const updateUser = (id, name, apellido) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.AppDataSource.getRepository(user_1.User).findOneBy({ id });
    if (!user)
        throw new Error("Usuario no encontrado");
    user.name = name;
    user.apellido = apellido;
    return yield db_1.AppDataSource.getRepository(user_1.User).save(user);
});
exports.updateUser = updateUser;
// Eliminar un usuario por ID
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.AppDataSource.getRepository(user_1.User).findOneBy({ id });
    if (!user)
        throw new Error("Usuario no encontrado");
    yield db_1.AppDataSource.getRepository(user_1.User).remove(user);
});
exports.deleteUser = deleteUser;
