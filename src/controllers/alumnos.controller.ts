import { Request, Response } from "express";
import { createAlumno, updateAlumno, getAllAlumnos, deleteAlumno } from "../services/alumnos.services";

// Obtener todos los alumnos
export const getAlumnosController = async (req: Request, res: Response) => {
  try {
    const alumnos = await getAllAlumnos();
    res.status(200).json(alumnos);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Crear un nuevo alumno
export const createAlumnoController = async (req: Request, res: Response) => {
  try {
    console.log(req.body); // Verifica los datos enviados
    const { nombre, apellido } = req.body;
    if (!nombre || !apellido) {
      return res.status(400).json({ error: 'Los campos nombre y apellido son obligatorios.' });
    }
    const nuevoAlumno = await createAlumno(nombre, apellido);
    res.status(201).json(nuevoAlumno);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }

};

// Actualizar un alumno existente
export const updateAlumnoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, apellido } = req.body;
    const alumnoActualizado = await updateAlumno(Number(id), nombre, apellido);
    res.status(200).json(alumnoActualizado);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Eliminar un alumno
export const deleteAlumnoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resultado = await deleteAlumno(Number(id));
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

