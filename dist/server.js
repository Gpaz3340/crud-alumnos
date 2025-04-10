"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const alumnos_router_1 = __importDefault(require("./routers/alumnos.router"));
const db_1 = require("./config/db");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Conectar rutas
app.use("/api/alumnos", alumnos_router_1.default);
// Conectar a la base de datos y arrancar el servidor
(0, db_1.connectDB)()
    .then(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
})
    .catch((error) => {
    console.error("Error al conectar la base de datos:", error.message);
    process.exit(1);
});
//import { connectDB } from "./config/db";
//conectar base de datos 
