import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
        ) {}

    //DA PRA GERAR O MÉTODO AUTOMATICAMENTE PELO VS CODE
    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            
            //VERIFICA SE O USER ESTÁ LOGADO
            if(this.userService.isLogged()){
                this.router.navigate(['user', this.userService.getUserName()])
                return false;
            }
        return true;
    }

}