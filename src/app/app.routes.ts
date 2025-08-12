import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListaAlumnosComponent } from './admin/lista-alumnos/lista-alumnos.component';
import { VerMateriasComponent } from './alumno/ver-materias/ver-materias.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin', loadChildren: () => import('./admin/adminRoute.routes').then(m => m.ADMIN_ROUTES) },
    { path: 'alumno', loadChildren: () => import('./alumno/alumRou.routes').then(m => m.ALUMNO_ROUTES) },
    { path: '**', redirectTo: '' }
];
