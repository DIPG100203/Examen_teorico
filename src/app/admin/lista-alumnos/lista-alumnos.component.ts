import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicioAsignarService, Alumno } from '../servicio-asignar.service';



@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './lista-alumnos.component.html',
  styles: ``
})
export class ListaAlumnosComponent {

  alumnos: Alumno[] = [];
  nuevoAlumno: Alumno = { id: 0, nombre: '', email: '' };

  constructor(private servicio: ServicioAsignarService) {}

  ngOnInit () {
    this.servicio.alumnos$.subscribe(alumnos => {
      this.alumnos = alumnos;
    })
  }

  agregarAlumno() {
    if (this.nuevoAlumno.nombre && this.nuevoAlumno.email) {

      this.servicio.agregarAlumnos({ ...this.nuevoAlumno, id: 0 });
      this.nuevoAlumno = {id: 0, nombre: '', email: ''};
    }
  }

}
