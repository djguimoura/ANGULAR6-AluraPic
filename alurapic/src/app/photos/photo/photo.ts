//INTERFACE DEFINIDA PARA TRAZER O FORMATO DO OBJETO QUE É RETORNADO DA API AO CHAMA-LOS PELO "app.component"
export interface Photo {
    id:number;
    postDate:Date;
    url:string;
    description:string;
    allowComments:boolean;
    likes:number;
    comments:number;
    userId:number;
}