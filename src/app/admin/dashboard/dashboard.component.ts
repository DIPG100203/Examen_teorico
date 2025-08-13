import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



interface Alumno {
  id: number;
  nombre: string;
  email: string;
}

interface Materia {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
})
export class dashboardComponent {
  alumnos: Alumno[] = [
    { id: 1, nombre: 'Víctor', email: 'victor@example.com' },
    { id: 2, nombre: 'Jorge', email: 'jorge@example.com' },
  ];

  materias: Materia[] = [
    { id: 1, nombre: 'Matemáticas' },
    { id: 2, nombre: 'Física' },
  ];

  nuevaMateriaNombre = '';
  alumnoSeleccionadoId: number | null = null;
  materiaSeleccionadaId: number | null = null;

  registrarMateria() {
    if (this.nuevaMateriaNombre.trim()) {
      const nuevaId = this.materias.length + 1;
      this.materias.push({ id: nuevaId, nombre: this.nuevaMateriaNombre.trim() });
      this.nuevaMateriaNombre = '';
      alert('Materia registrada');
    } else {
      alert('Ingresa un nombre válido');
    }
  }

  asignarMateria() {
    if (this.alumnoSeleccionadoId && this.materiaSeleccionadaId) {
      alert(`Materia asignada a alumno con ID ${this.alumnoSeleccionadoId}`);
      this.alumnoSeleccionadoId = null;
      this.materiaSeleccionadaId = null;
    } else {
      alert('Selecciona alumno y materia');
    }
  }
}
