import express from "express";
import cors from "cors";
import alumnosRouter from "./routers/alumnos.router";
import { connectDB } from "./config/db";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

app.use(express.json());

// Conectar rutas
app.use("/api/alumnos", alumnosRouter);

// Conectar a la base de datos y arrancar el servidor
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error("Error al conectar la base de datos:", error.message);
    process.exit(1);
  });



  











//import { connectDB } from "./config/db";
//conectar base de datos 
