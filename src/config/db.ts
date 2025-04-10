import "reflect-metadata";
import {DataSource} from "typeorm";
import dotenv from "dotenv"
import { alumnos } from "../entities/alumnos";
//import { User } from "../entities/user";


//import AppDataSource from "./data-source";
//import * as dotenv from "dotenv";

dotenv.config();
export const AppDataSource = new DataSource({
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

export const connectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Conexión a la base de datos establecida");
    } catch (error) {
       // console.error("Error en el servidor:", error);
        console.error("Detalles del error:", error); // Imprime el stack completo
        process.exit(1); // Detiene la ejecución en caso de error
    }
};
