import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Materia {
  id: number;
  nombre: string;
  clave: string;
  semestre: number;
}

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './materias.component.html',
  styles: ``
})
export class MateriasComponent {

  materias: Materia[] = [];

  semestres = [1, 2, 3, 4, 5, 6, 7, 8];

  nuevaMateria: Partial<Materia> = {

    nombre: '',
    clave: '',
    semestre: 0,
  };


  registrarMateria() {
    if (this.nuevaMateria.nombre && this.nuevaMateria.clave && this.nuevaMateria.semestre) {
      const nueva =    {
        id: this.materias.length + 1,
        nombre: this.nuevaMateria.nombre,
        clave: this.nuevaMateria.clave,
        semestre: this.nuevaMateria.semestre
      };

      this.materias.push(nueva);

      this.nuevaMateria = { nombre: '', clave: '', semestre: 0 };
      alert('Materia registrada exitosamente');
    
    }
    else {
      alert('Por favor, complete todos los campos.');
    }
  }

}
