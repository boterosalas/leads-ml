import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../infrastructure/auth.service';

export const authGuard: CanActivateFn = (
  route,
  state
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getMe().pipe(
    map((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      return user.id ? true : router.createUrlTree(['/']);
    }),
    catchError(() => {
      return of(router.createUrlTree(['/']));
    })
  );
};
