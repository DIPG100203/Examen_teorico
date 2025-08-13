import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListaAlumnosComponent } from './admin/lista-alumnos/lista-alumnos.component';
import { VerMateriasComponent } from './alumno/ver-materias/ver-materias.component';
import { MateriasComponent } from './admin/materias/materias.component';
import { adminGuard } from './guards/admin.guard';
import { alumnoGuard } from './guards/alumno.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { 
        path: 'admin', 
        canActivate: [adminGuard],
        loadChildren: () => import('./admin/adminRoute.routes').then(m => m.ADMIN_ROUTES) 
    },
    { 
        path: 'alumno',
        canActivate: [alumnoGuard],
        loadChildren: () => import('./alumno/alumRou.routes').then(m => m.ALUMNO_ROUTES) },
    { path: '**', redirectTo: '' }
];
