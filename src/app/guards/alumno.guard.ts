import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const alumnoGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);


  if (auth.isLoggedIn() && auth.getRole() === 'alumno'){
    return true;
  }

  router.navigate(['/login']);
  return false;
};
