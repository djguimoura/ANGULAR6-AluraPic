import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';
>>>>>>> 34c640d (publish final version project alurapic)

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
<<<<<<< HEAD
    private router: Router
=======
    private router: Router,
    private alertService: AlertService, 
    private userService: UserService
>>>>>>> 34c640d (publish final version project alurapic)
    ) { }

  //NO MÉTODO "ngOnInit" ESTARÁ CONFIGURADO A VALIDAÇÃO DOS CAMPOS E SERA REFERENCIADO NO "photo-form.component.html"
  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this.photoService
      .upload(description, allowComments, this.file)
<<<<<<< HEAD
      .subscribe(() => this.router.navigate(['']))
=======
      .subscribe(() => {
        this.alertService.success('Upload complete', true);
        this.router.navigate(['/user', this.userService.getUserName()])
      });
>>>>>>> 34c640d (publish final version project alurapic)
  }

  //MÉTODO RESPONSÁVEL PELA CONVERSÃO DO ARQUIVO PARA BASE 64, "data uri"
  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
