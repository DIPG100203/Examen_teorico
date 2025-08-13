import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

export interface Usuario {
  email: string;
  password: string;
  rol: string;
  nombre: string;
}

interface loginResponse {
  success: boolean;
  token?: string;
  rol?: string;
  nombre?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioActual: Usuario | null = null;
  private apiURL = 'http://localhost/backend/login.php';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<loginResponse>(this.apiURL, { email, password }).pipe(
      map(response => {
        if (response.success && response.token && response.rol) {
          this.usuarioActual = { 
            email, 
            password, 
            rol: response.rol || ''
            , nombre: response.nombre || '' 
          };
          localStorage.setItem('usuario', JSON.stringify(this.usuarioActual));
          localStorage.setItem('token', response.token);
          return true;
        }
        return false;
      }),
      catchError(()=>of(false))
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
    

  getRole():string {
    if (this.usuarioActual) {
      return this.usuarioActual.rol;
    }
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      return JSON.parse(usuarioGuardado).nombre
    }
    return '';
  }
  logout() {
    this.usuarioActual = null;
    localStorage.removeItem('usuario');
  }

  getUsuarioActual(): Usuario | null {
  if (this.usuarioActual) return this.usuarioActual;
  const u = localStorage.getItem('usuario');
  if (u) this.usuarioActual = JSON.parse(u);
  return this.usuarioActual;
}
}
