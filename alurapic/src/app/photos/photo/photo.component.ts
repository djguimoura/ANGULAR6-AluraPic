import { Component,Input } from '@angular/core';

//DEFININDO PATH DAS IMAGENS QUE SÃO CARREGADAS PELA APLICAÇÃO (Upload)
const CLOUD = 'http://localhost:3000/imgs/';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html',
    styleUrls: ['photo.component.css']
})

export class PhotoComponent {

    private _url = '';

    @Input() description = '';

    /*
    se url.startsWith('data') - toda url que é uma data uri começa com o termo data.
    Caso não comece com o termo citado, this._url será CLOUD + url;
    Se nenhum desses casos, a url continuará a receber o valor da data uri.
    */
   
    //DEFININDO UM "inboud property" PARA UM "setter"
    @Input() set url(url: string){
        if(!url.startsWith('data')){
            this._url = CLOUD + url;
        } else{
            this._url = url;
        }
    }

    get url(){
        return this._url;
    }
}