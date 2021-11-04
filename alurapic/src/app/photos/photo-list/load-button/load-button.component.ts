import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  //PARA SABER SE ELE TEM MAIS COISAS PARA SER EXIBIDO OU NÃO
  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
