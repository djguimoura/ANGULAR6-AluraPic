import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
<<<<<<< HEAD

const API_URL = "http://localhost:3000";
=======
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;
>>>>>>> 34c640d (publish final version project alurapic)

//SERVICE PARA VALIDAÇÃO DE EXISTENCIA DE USERNAME JÁ CADASTRADO NA BASE DO SISTEMA, TRABALHA JUNTO COM O SERVICE "user-noy-taken.validator.service"
@Injectable()
export class SignUpService {

    constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {

<<<<<<< HEAD
        return this.http.get(API_URL + '/user/exists/' + userName);
    }

    signup(newUser: NewUser) {
        return this.http.post(API_URL + '/user/signup', newUser);
=======
        return this.http.get(API + '/user/exists/' + userName);
    }

    signup(newUser: NewUser) {
        return this.http.post(API + '/user/signup', newUser);
>>>>>>> 34c640d (publish final version project alurapic)
    }
}