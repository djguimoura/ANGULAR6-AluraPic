import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { RouterModule } from "@angular/router";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
<<<<<<< HEAD
=======
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
import { ShowIfLoggedModule } from "src/app/shared/directives/show-if-logged/show-if-logged.module";
>>>>>>> 34c640d (publish final version project alurapic)

@NgModule({
    declarations: [
        PhotoDetailsComponent, 
<<<<<<< HEAD
        PhotoCommentsComponent
=======
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective
>>>>>>> 34c640d (publish final version project alurapic)
    ],
    exports: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
<<<<<<< HEAD
        VMessageModule
=======
        VMessageModule,
        ShowIfLoggedModule
>>>>>>> 34c640d (publish final version project alurapic)
    ]
})
export class PhotoDetailsModule { }