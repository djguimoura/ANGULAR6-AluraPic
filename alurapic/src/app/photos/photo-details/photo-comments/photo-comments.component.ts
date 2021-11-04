import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from "../../photo/photo.service";
import { Observable } from "rxjs";
import { PhotoComment } from "../../photo/photo-comment";
import { switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    commentForm: FormGroup;

    comments$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder
        ) {}

    ngOnInit(): void {
       
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment:['', Validators.maxLength(200)]
        })
    }

    save() {
        const comment = this.commentForm.get('comment').value as string;
        this.comments$ = this.photoService
                .addComment(this.photoId, comment)
                .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
                .pipe(tap(() => {
                    this.commentForm.reset();
                    //alert('Comentário adicionado com sucesso');
          }));
    }
}