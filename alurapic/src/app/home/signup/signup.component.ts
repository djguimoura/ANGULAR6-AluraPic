import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserNotTakenValidatorService } from './user-noy-taken.validator.service';
import { Router } from '@angular/router';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ]
})

export class SignUpComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakeValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
        ) {}

    //IMPLEMENTANDO VALIDAÇÃO DOS CAMPOS DO FORM PARA CHAMÁ-LOS NO "signup.component.html"
    //O ANGULAR DISPÕE DAS PROPRIEDADES DE VALIDAÇÃO DO "validators"
    ngOnInit(): void {
        
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    //VALIDADORES SÍNCRONOS
                    Validators.required,
                    Validators.pattern(/^[a-z0-9_\-]+$/), //PATTERN PARA NÃO PERMITIR NUMERO NO INICIO DO NOME E QUE PRECISA ESTAR TUDO EM LETRA MINUSCULA
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                //VALIDADOR ASSÍNCRONO
                this.userNotTakeValidatorService.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
        this.platformDetectorService.isPlatformBrowser() &&
        this.emailInput.nativeElement.focus();
    }

    signup() {
        //GETRAWVALUE PEGA TODOS OS VAL DAS PROPRIEDADES ACIMA DE UMA VEZ POR UM OBJETO JS
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService
            .signup(newUser)
            .subscribe(
                () => this.router.navigate(['']), //SE O REGISTRO DÊ SUCESSO, REDIRECIONA PARA TELA DE LOGIN, SENÃO RETORNA ERRO
                err => console.log(err)
            );
    }
}