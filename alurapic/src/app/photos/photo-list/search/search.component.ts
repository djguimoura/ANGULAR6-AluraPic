//TODO COMPONENT PRECISA IMPORTAR O "Component" do Angular PARA FUNCIONAR
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter} from 'rxjs/operators'

@Component({
  selector: 'ap-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    //PARA O "Output" E "debounce", O TYPESCRIPT JÁ ESTÁ INFERINDO O TIPO DELES APÓS SER INSTANCIADO, DEPOIS DO "new"
    
    //"Output" CRIADO COMO EVENTO CUSTOMIZADO PARA SER USADO NO "photo-list.component.html"
    @Output() onTyping = new EventEmitter<string>();
    //"Input" CRIADO PARA LIMPAR O CAMPO DE SEARCH PARA SER USADO NO "photo-list.component.html", SURTIRÁ EFEITO APÓS O USUÁRIO CLICAR NO BUTTON DE "Load More"
    @Input() value: string = '';
    //APLICANDO DEBOUNCE UTILIZANDO SUBJECT DO RXJS PARA MELHORIA DE PERFORMANCE DO FILTRO UTILIZANDO O PIPE PARA UTILIZAR O DEBOUNCETIME CONFIGURANDO O INTERVALO PARA APLICAÇÃO DE CADA FILTRO
    debounce = new Subject<string>();

    ngOnInit(): void{

        this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.onTyping.emit(filter));
    }

    /*TODA VEZ QUE HOUVER ALGO QUE FIQUE EMITINDO VALORES INFINITAMENTE, É NECESSÁRIO IMPLEMENTAR UMA INTERFACE,
    ONDESTROY, QUE TAMBÉM PRECISA SER IMPLEMENTADA EM PHOTO-LIST.COMPONENT.TS. AO FAZERMOS ISTO, O MÉTODO NGONDESTROY() É ACRESCENTADO.
    ELE FAZ PARTE DO CICLO DE VIDA DE UM COMPONENTE DO ANGULAR, SENDO CHAMADO TODA VEZ QUE UM OBJETO É DESTRUÍDO.*/
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
}

}
