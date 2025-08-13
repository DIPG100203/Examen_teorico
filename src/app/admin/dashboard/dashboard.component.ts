import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicioAsignarService, Alumno, Materias, Asignacion } from '../servicio-asignar.service';





@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
})
export class dashboardComponent {
  alumnos: Alumno[] = [];

  materias: Materias[] = [];

  asignaciones: Asignacion[] = [];

  alumnoSeleccionadoId: number | null = null;
  materiaSeleccionadaId: number | null = null;
  nuevaMateriaNombre = '';
  nuevoAlumnoNombre = '';
  nuevoAlumnoEmail = '';

  constructor(private servicio: ServicioAsignarService) {}

  ngOnInit() {
    this.servicio.alumnos$.subscribe(a => this.alumnos = a);
    this.servicio.materias$.subscribe(m => this.materias = m);
    this.servicio.asignaciones$.subscribe(as => this.asignaciones = as);
  }

  registrarAlumnos(){

    if (this.nuevoAlumnoNombre.trim() && this.nuevoAlumnoEmail.trim()) {
      const nuevoId = this.alumnos.length + 1;
      this.servicio.agregarAlumnos({ id: nuevoId, nombre: this.nuevoAlumnoNombre.trim(), email: this.nuevoAlumnoEmail.trim() });
      this.nuevoAlumnoNombre = '';
      this.nuevoAlumnoEmail = '';
      alert('Alumno registrado');
      
    }
  }

  registrarMateria() {
    if (this.nuevaMateriaNombre.trim()) {
      const nuevaId = this.materias.length > 0 ? Math.max(...this.materias.map(m => m.id)) + 1 : 1;
      this.servicio.agregarMaterias({
        id: nuevaId, nombre: this.nuevaMateriaNombre.trim(),
        clave: '',
        semestre: 0
      });
      this.nuevaMateriaNombre = '';
      alert('Materia registrada');
    } else {
      alert('Ingresa un nombre válido');
    }
  }

  

  asignarMateria() {
    if (this.alumnoSeleccionadoId && this.materiaSeleccionadaId) {
      this.servicio.agregarAsignacion(this.alumnoSeleccionadoId, this.materiaSeleccionadaId);
      alert(`Materia asignada a alumno con ID ${this.alumnoSeleccionadoId}`);
      this.alumnoSeleccionadoId = null;
      this.materiaSeleccionadaId = null;
    } else {
      alert('Selecciona alumno y materia');
    }
  }

  obtenerMateriasPorAlumno(alumnoID: number){
    return this.asignaciones
      .filter(asignacion => asignacion.alumnoId === alumnoID)
      .map(a => this.materias.find(m => m.id === a.materiaId) ?.nombre || '')
  }
}
