import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alert } from 'selenium-webdriver';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
        ) {}

    //DA PRA GERAR O MÉTODO AUTOMATICAMENTE PELO VS CODE
    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            
            //VERIFICA SE O USER ESTÁ LOGADO, SE NÃO ESTIVER LOGADO JOGA PRA TELA DE LOGIN
            if(!this.userService.isLogged()){
                //alert('Você não está logado, realize o login');
                this.router.navigate(['']);
                return false;
            }
        return true;
    }

}