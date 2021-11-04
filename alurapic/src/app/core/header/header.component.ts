import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    //TODA VEZ QUE TEM UM OBSERVABLE, UTILIZA O CIFRÃO PARA INDICAR QUE É UM OBSERVABLE, NESSE CASO É UM OBSERVABLE DO TIPO "user" (INTERFACE)
    user$: Observable<User>;

    //DENTRO DOS PARÂMETROS DO CONSTRUCTOR ESTÁ SENDO INJETADO O "UserService" E "Router"
    constructor(
        private userService: UserService,
        private router: Router){

            this.user$ = userService.getUser();

    }

    //IMPLEMENTANDO O REDIRECT DA PÁGINA com o "this.router.navigate([''])"
    logout(){
        this.userService.logout();
        this.router.navigate(['']);
<<<<<<< HEAD

    }
}
=======
    }
}

>>>>>>> 34c640d (publish final version project alurapic)
