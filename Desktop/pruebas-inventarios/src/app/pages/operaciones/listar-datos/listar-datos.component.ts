import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-datos',
  templateUrl: './listar-datos.component.html',
  styleUrls: ['./listar-datos.component.css']
})
export class ListarDatosComponent implements OnInit {
  isShown: boolean = false ;


  toggleShow() {

  this.isShown = ! this.isShown;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
