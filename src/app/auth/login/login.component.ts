import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Usuario {
  email: string;
  password: string;
  rol: string;
  nombre: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
})



export class LoginComponent {

  email = '';
  password = '';
  error = '';


  constructor(private auth: AuthService, private router: Router) {}

  logear() {
  this.error = '';
  this.auth.login(this.email.trim(), this.password).subscribe(ok => {
    if (ok) {
      const role = this.auth.getRole();

      if (role === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else if (role === 'alumno') {
        this.router.navigate(['/alumno/ver-materias']);
      } else {
        this.router.navigate(['/login']);
      }
    } else {
      this.error = 'Credenciales incorrectas';
    }
  }, err => {
    this.error = 'Error al autenticar';
  });
}

}
