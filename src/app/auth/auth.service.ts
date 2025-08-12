import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioActual: any = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>('assets/usuarios.json').pipe(
      map(usuarios => {
        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (usuario) {
          this.usuarioActual = usuario;
          localStorage.setItem('usuario', JSON.stringify(usuario));
          return true;
        }
        return false;
      })
    );
  }

  getRole(): string {
    if (this.usuarioActual) {
      return this.usuarioActual.rol;
    }
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      return JSON.parse(usuarioGuardado).rol;
    }
    return '';
  }

  getNombre(): string {
    if (this.usuarioActual) {
      return this.usuarioActual.nombre;
    }
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      return JSON.parse(usuarioGuardado).nombre;
    }
    return '';
  }

  logout() {
    this.usuarioActual = null;
    localStorage.removeItem('usuario');
  }
}
