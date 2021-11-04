import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';
    
    @Directive({
        selector: '[apDarkenOnHover]'
    })

    export class  DarkenOnHoverDirective{

        @Input() brightness = '70%';

        constructor(
            private el: ElementRef,
            private render: Renderer
        ){}

        //MÉTODO PARA QUANDO PASSAR O MOUSE NO ELEMENTO
        @HostListener('mouseover')
        darkenOn(){
            this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
        }

        //MÉTODO PARA QUANDO TIRAR O MOUSE NO ELEMENTO
        @HostListener('mouseleave')
        darkenOff(){
            this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
        }
    }