import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-materias',
  standalone: true,
  imports: [],
  templateUrl: './ver-materias.component.html',
  styles: ``
})
export class VerMateriasComponent {

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
