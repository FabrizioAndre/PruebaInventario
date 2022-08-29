import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-historial-periodos',
  templateUrl: './historial-periodos.component.html',
  styleUrls: ['./historial-periodos.component.css']
})
export class HistorialPeriodosComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  Reiniciar(contentReiniciar: any) {
    this.modalService.open(contentReiniciar, { centered: true });
  }
  Historial(contentHistorial: any) {
    this.modalService.open(contentHistorial, { centered: true, size: 'lg' });
  }
}
