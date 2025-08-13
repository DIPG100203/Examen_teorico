import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from 'express';


interface Alumno{
  id: number;
  nombre: string;
  email: string;
}

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './lista-alumnos.component.html',
  styles: ``
})
export class ListaAlumnosComponent {

  alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', email: 'juan@example.com' },
    { id: 2, nombre: 'Maria', email: 'maria@example.com' },
    { id: 3, nombre: 'Pedro', email: 'pedro@example.com' }
  ];

  nuevoAlumno: Alumno = { id: 0, nombre: '', email: '' };

  agregarAlumno() {
    if (this.nuevoAlumno.nombre && this.nuevoAlumno.email) {
      this.nuevoAlumno.id = this.alumnos.length + 1;
      this.alumnos.push({ ...this.nuevoAlumno });
      this.nuevoAlumno = { id: 0, nombre: '', email: '' };
    }
  }

}
