import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { ActivatedRoute } from "@angular/router";
import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";
import { Observable } from "rxjs";

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit{
=======
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";
import { AlertService } from "src/app/shared/components/alert/alert.service";
import { UserService } from "src/app/core/user/user.service";


@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['photo-details.component.css']
})

export class PhotoDetailsComponent implements OnInit { 
>>>>>>> 34c640d (publish final version project alurapic)

    photo$: Observable<Photo>;
    photoId: number;

    constructor(
        private route: ActivatedRoute,
<<<<<<< HEAD
        private photoService: PhotoService
        ){}

    ngOnInit(): void {
        //"photoId" QUE ESTÁ MAPEADO NA ROTA DA CLASSE "app.routing.module.ts"
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId);
    }
 }
=======
        private photoService: PhotoService,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
       //"photoId" QUE ESTÁ MAPEADO NA ROTA DA CLASSE "app.routing.module.ts"
       this.photoId = this.route.snapshot.params.photoId;
       this.photo$ = this.photoService.findById(this.photoId)
       this.photo$.subscribe(() => {}, err => {
            console.log(err);
            this.router.navigate(['not-found']);
        });
    }

    remove() {
        this.photoService
            .removePhoto(this.photoId)
            .subscribe(
                () => {
                    this.alertService.success("Photo removed!!", true);
                    this.router.navigate(['/user', this.userService.getUserName()]);
                },
                err => {
                    console.log(err);
                    this.alertService.warning('Could not delete the photo!', true);
                });
    }

    like(photo: Photo){
        this.photoService
        .like(photo.id)
        .subscribe(liked => {
            if(liked){
                this.photo$ = this.photoService.findById(photo.id);
            }
        }, err => alert(err));
    }
}
>>>>>>> 34c640d (publish final version project alurapic)
