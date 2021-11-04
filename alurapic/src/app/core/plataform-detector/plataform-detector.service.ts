import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    isPlatformBrowser() {
        return isPlatformBrowser(this.platformId);
    }
}

/*
Explicação sobre o Serviço Platform Detector para identificar se a aplicação está sendo executada no navegador ou não:

O Angular possui mecanismos que permitem a identificação do funcionamento do código no navegador,
ou em outra plataforma, que pode ser no server side ou não. Iremos nos munir deste recurso do Angular
para condicionar o focus() para uso apenas quando estivermos no navegador.


*/