import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicioAsignarService, Alumno, Materias } from '../servicio-asignar.service';

@Component({
  selector: 'app-asignar-materias',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './asignar-materias.component.html',
  styles: ``
})
export class AsignarMateriasComponent {

  alumnos: Alumno[] = [];
  materias: Materias[] = [];

  alumnoID: number | null = null;
  materiaID: number[] = [];


  constructor(private asignar: ServicioAsignarService) {

    this.asignar.alumnos$.subscribe(a => this.alumnos = a);
    this.asignar.materias$.subscribe(m => this.materias = m);
  }

  asignarMateria() {
    console.log('Asignar materia:', this.materiaID);
    console.log('Alumno ID:', this.alumnoID);
  }

}
