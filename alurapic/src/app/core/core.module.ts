<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeaderComponent } from './header/header.component';
=======
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
>>>>>>> 34c640d (publish final version project alurapic)
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
=======
import { AlertModule } from '../shared/components/alert/alert.module';
>>>>>>> 34c640d (publish final version project alurapic)

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
<<<<<<< HEAD
        RouterModule
=======
        RouterModule,
        AlertModule
>>>>>>> 34c640d (publish final version project alurapic)
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
<<<<<<< HEAD

})

export class CoreModule {}
=======
})
export class CoreModule { }
>>>>>>> 34c640d (publish final version project alurapic)
