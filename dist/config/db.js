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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
//import { User } from "../entities/user";
//import AppDataSource from "./data-source";
//import * as dotenv from "dotenv";
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 5432),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "3340",
    database: process.env.DB_NAME || "bdescuela",
    synchronize: false, // Cambiado a 'false'
    logging: false,
    entities: [__dirname + "/../entities/*.ts"],
});
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.AppDataSource.initialize();
        console.log("Conexión a la base de datos establecida");
    }
    catch (error) {
        // console.error("Error en el servidor:", error);
        console.error("Detalles del error:", error); // Imprime el stack completo
        process.exit(1); // Detiene la ejecución en caso de error
    }
});
exports.connectDB = connectDB;
