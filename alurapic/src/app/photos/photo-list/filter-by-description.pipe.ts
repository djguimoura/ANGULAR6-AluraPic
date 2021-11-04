import { Pipe, PipeTransform } from '@angular/core'
import { Photo } from '../photo/photo';

//CLASS RESPONSÁVEL PELA CRIAÇÃO DO PIPE DE FILTRO DE FOTOS NO SEARCH
@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform{
    
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

            if(descriptionQuery) {
                return photos.filter(photo => 
                    photo.description.toLowerCase().includes(descriptionQuery)
                );
            } else {
                return photos;
            }
    }

}