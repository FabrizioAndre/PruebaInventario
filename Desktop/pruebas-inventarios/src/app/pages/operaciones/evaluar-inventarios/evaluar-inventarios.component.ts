import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-evaluar-inventarios',
  templateUrl: './evaluar-inventarios.component.html',
  styleUrls: ['./evaluar-inventarios.component.css']
})
export class EvaluarInventariosComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  Aprobar(contentAprobar: any) {
    this.modalService.open(contentAprobar, { centered: true });
  }
  Observar(contentObservar: any) {
    this.modalService.open(contentObservar, { centered: true });
  }
}
