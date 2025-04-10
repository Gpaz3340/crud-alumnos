import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class alumnos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombres: string;

  @Column({ nullable: false })
  apellidos: string;

  constructor() {
    this.id = 0; // Inicializador dentro del constructor
    this.nombres = "";
    this.apellidos = "";
  }
}