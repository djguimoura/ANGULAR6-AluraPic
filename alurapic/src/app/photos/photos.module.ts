import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoComponent } from './photo/photo.component';
import { DarkenOnHoverModule } from '../shared/directives/dark-on-hover/darken-on-hover.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';


@NgModule({
    imports: [ 
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        DarkenOnHoverModule,
        PhotoDetailsModule
    ]
})

export class PhotosModule{}