import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {map} from 'rxjs/operators';
import {NGXLogger} from "ngx-logger";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService,
    private userService: UserService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const usuario = this.userService.getUser();

    if (usuario && (usuario.rol === 'USER' || usuario.rol === 'ADMIN')) {
      return true;
    } else {
      this.router.navigate(['/usuario/login']);
      this.logger.error('INTENTO DE ENTRADA A RUTA SIN AUTENTIFICARSE');
      this.toastr.error('DEBES ESTAR LOGEADO PARA ACCEDER A ESA RUTA', 'HA HABIDO UN ERROR', {
        toastClass: 'toast error'
      });
      return false;
    }
  }
}
