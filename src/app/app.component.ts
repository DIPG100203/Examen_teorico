import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { VerMateriasComponent } from "./alumno/ver-materias/ver-materias.component";
import { ListaAlumnosComponent } from "./admin/lista-alumnos/lista-alumnos.component";
import { MateriasComponent } from "./admin/materias/materias.component";
import { AsignarMateriasComponent } from "./admin/asignar-materias/asignar-materias.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { dashboardComponent } from "./admin/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, VerMateriasComponent, ListaAlumnosComponent, MateriasComponent, AsignarMateriasComponent, CommonModule, FormsModule, dashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EXAMEN_TEO';
}
