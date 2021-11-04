import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

//INJECTABLE INDICA QUE A CLASSE É UM SERVICE
@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) {}

    //MÉTODO PARA CASO OCORRA ERRO DE VALIDAÇÃO
    checkUserNameTaken() {

        return (control: AbstractControl) => {

            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => 
                    this.signUpService.checkUserNameTaken(userName)
                ))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null )) //VERIFICANDO E RETORNANDO SE HOUVER ERRO
                .pipe(first());
        }
    }
}