import { Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { MateriasComponent } from './materias/materias.component';
import { AsignarMateriasComponent } from './asignar-materias/asignar-materias.component';
import { dashboardComponent } from './dashboard/dashboard.component';


export const ADMIN_ROUTES: Routes = [
  { path: 'dashboard', component: dashboardComponent },
  { path: 'lista-alumnos', component: ListaAlumnosComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'asignar-materias', component: AsignarMateriasComponent }
];
