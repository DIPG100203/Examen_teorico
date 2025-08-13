import { Component, OnInit } from '@angular/core';
import { AuthService, Usuario } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { ServicioAsignarService, Alumno, Materias } from '../../admin/servicio-asignar.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Asignacion {
  alumnoId: number;
  materiaId: number;
}

@Component({
  selector: 'app-ver-materias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ver-materias.component.html',
  styles: ``
})
export class VerMateriasComponent implements OnInit {

  asignaciones: Asignacion[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    const asignacionesStr = localStorage.getItem('asignaciones');
    this.asignaciones = asignacionesStr ? JSON.parse(asignacionesStr) : [];
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
