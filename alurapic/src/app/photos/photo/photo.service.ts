import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

<<<<<<< HEAD
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';

const API = 'http://localhost:3000';
=======
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';

const API = environment.ApiUrl;
>>>>>>> 34c640d (publish final version project alurapic)

//IRÁ CRIAR NO ESCOPO RAÍZ PARA UTILIZAÇÃO DO INJECTOR
@Injectable({ providedIn: 'root' })
export class PhotoService{

    constructor(private http: HttpClient){}
        
        listFromUser(userName: string){
            
            return this.http
                .get<Photo[]>(`${API}/${userName}/photos`);

        }

        listFromUserPaginated(userName: string, page: number) {
            const params = new HttpParams()
                .append('page', page.toString());
        
            return this.http
                .get<Photo[]>(API + '/' + userName + '/photos', { params });
        }

        upload(description: string, allowComments: boolean, file: File) {
            
            const formData = new FormData();
            formData.append('description', description);
            formData.append('allowComments', allowComments ? 'true' : 'false');
            formData.append('imageFile', file);

            return this.http.post(`${API}/photos/upload`, formData);
        } 
        
        findById(photoId: number){
            return this.http.get<Photo>(`${API}/photos/${photoId}`);
        }

        getComments(photoId: number){
            return this.http.get<PhotoComment[]>(`${API}/photos/${photoId}/comments`);
        }

        addComment(photoId: number, commentText: string){
            return this.http.post<PhotoComment[]>(`${API}/photos/${photoId}/comments`, {commentText});
        }
<<<<<<< HEAD
=======

        removePhoto(photoId: number) {
            return this.http.delete(API + '/photos/' + photoId);
        }

        like(photoId: number){
            return this.http.post(
                `${API}/photos/${photoId}/like`, {}, { observe: 'response'}
            )
            .pipe(map(res => true))
            .pipe(catchError(err => {
                return err.status == '304' ? of(false) : throwError(err);
            }));
        }

        
>>>>>>> 34c640d (publish final version project alurapic)
        //OBS:  OS PATHS MAPEADOS ACIMA, PERTECEM A API: 'http://localhost:3000' LOCAL ONDE FICAM ARMAZENADAS AS FOTOS, INFOS DE USUÁRIO, E DEMAIS DADOS DA APLICAÇÃO
}