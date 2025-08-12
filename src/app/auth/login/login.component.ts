import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.error = '';
    this.auth.login(this.email.trim(), this.password).subscribe(ok => {
      if (ok) {
        const role = this.auth.getRole();

        if (role === 'admin') {
          this.router.navigate(['/admin/lista-alumnos']);
        }
        else if (role === 'alumno') {
          this.router.navigate(['/ver-materias']);
        }
        else {
          this.router.navigate(['/login']);
        }
      }
      else {
        this.error = "Credenciales incorrectas";
      }
    }, err => {
      this.error = "Error al autenticar";
    });
  }
}
