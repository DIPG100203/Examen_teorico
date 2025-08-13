import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Alumno {
  id: number;
  nombre: string;
  email: string;
}

export interface Materias {
  id: number;
  nombre: string;
  clave: string;
  semestre: number;
}

export interface Asignacion {
  alumnoId: number;
  materiaId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioAsignarService {

  private alumnos = new BehaviorSubject<Alumno[]>(this.cargarAlumnos());
  alumnos$ = this.alumnos.asObservable();

  private materias = new BehaviorSubject<Materias[]>(this.cargarMaterias());
  materias$ = this.materias.asObservable();

  private asignaciones = new BehaviorSubject<Asignacion[]>(this.cargarAsignaciones());
  asignaciones$ = this.asignaciones.asObservable();

  constructor() {}

  private cargarAlumnos(): Alumno[] {
    if (typeof localStorage === 'undefined') return [];
    return JSON.parse(localStorage.getItem('alumnos') || '[]');
  }

  private cargarMaterias(): Materias[] {
    if (typeof localStorage === 'undefined') return [];
    return JSON.parse(localStorage.getItem('materias') || '[]');
  }

  private cargarAsignaciones(): Asignacion[] {
    if (typeof localStorage === 'undefined') return [];
    return JSON.parse(localStorage.getItem('asignaciones') || '[]');
  }

  agregarAlumnos(alumno: Alumno) {
    const current = this.alumnos.getValue();
    alumno.id = current.length + 1;
    const updated = [...current, alumno];
    this.alumnos.next(updated);
    if (typeof localStorage !== 'undefined') localStorage.setItem('alumnos', JSON.stringify(updated));
  }

  agregarMaterias(materia: Materias) {
    const current = this.materias.getValue();
    materia.id = current.length + 1;
    const updated = [...current, materia];
    this.materias.next(updated);
    if (typeof localStorage !== 'undefined') localStorage.setItem('materias', JSON.stringify(updated));
  }

  agregarAsignacion(alumnoId: number, materiaId: number) {
    const current = this.asignaciones.getValue();
    if (!current.find(a => a.alumnoId === alumnoId && a.materiaId === materiaId)) {
      const updated = [...current, { alumnoId, materiaId }];
      this.asignaciones.next(updated);
      if (typeof localStorage !== 'undefined') localStorage.setItem('asignaciones', JSON.stringify(updated));
    }
  }

}
