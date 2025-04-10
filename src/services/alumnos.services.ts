import { AppDataSource } from "../config/db";
import { alumnos } from "../entities/alumnos";

// Obtener todos los registros
export const getAllAlumnos = async () => {
  const alumnosRepository = AppDataSource.getRepository(alumnos);
  return await alumnosRepository.find();
};

// Crear un nuevo registro
export const createAlumno = async (nombre: string, apellido: string) => {
  const alumno = new alumnos();
  alumno.nombres = nombre;
  alumno.apellidos = apellido;

  const alumnosRepository = AppDataSource.getRepository(alumnos);
  return await alumnosRepository.save(alumno);
};

// Actualizar un registro existente
export const updateAlumno = async (id: number, nombre: string, apellido: string) => {
  const alumnosRepository = AppDataSource.getRepository(alumnos);
  const alumno = await alumnosRepository.findOneBy({ id });

  if (!alumno) {
    throw new Error("Alumno no encontrado");
  }

  alumno.nombres = nombre;
  alumno.apellidos = apellido;
  return await alumnosRepository.save(alumno);
};

// Eliminar un registro
export const deleteAlumno = async (id: number) => {
  const alumnosRepository = AppDataSource.getRepository(alumnos);
  const alumno = await alumnosRepository.findOneBy({ id });

  if (!alumno) {
    throw new Error("Alumno no encontrado");
  }

  await alumnosRepository.remove(alumno);
  return { message: "Alumno eliminado correctamente" };
};